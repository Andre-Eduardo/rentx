import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNetInfo } from '@react-native-community/netinfo';
import { synchronize } from '@nozbe/watermelondb/sync';

import { database } from '../../database';
import api from '../../services/api';

import Logo from '../../assets/logo.svg';
import { CarDTO } from '../../dtos/CarDTO';

import { Car } from '../../components/Car';
import { Car as ModelCar } from '../../database/model/Car';

import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList,
} from './styles';
import { Load } from '../../components/Load';

export function Home() {
  const [cars, setCars] = useState<ModelCar[]>([]);
  const [loading, setLoading] = useState(true);

  const netInfo = useNetInfo();
  const navigation = useNavigation();
  const synchronizing = useRef(false);

  function handleCarDetails(car: CarDTO) {
    navigation.navigate('CarDetails', { carId: car.id });
  }

  async function fetchCars() {
    try {
      const carCollection = database.get<ModelCar>('cars');
      const carsRequest = await carCollection.query().fetch();

      setCars(carsRequest);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  async function offlineSynchronize() {
    await synchronize({
      database,
      pullChanges: async ({ lastPulledAt }) => {
        const response = await api
          .get(`cars/sync/pull?lastPulledVersion=${lastPulledAt || 0}`);

        const { changes, latestVersion } = response.data;

        return { changes, timestamp: latestVersion };
      },
      pushChanges: async ({ changes }) => {
        const user = changes.users;
        if (user) {
          await api.post('/users/sync', user);
        }
      },
    });

    await fetchCars();
  }

  useFocusEffect(useCallback(() => {
    const syncChanges = async () => {
      if (netInfo.isConnected && !synchronizing.current) {
        synchronizing.current = true;

        try {
          await offlineSynchronize();
        } catch (err) {
          console.log(err);
        } finally {
          synchronizing.current = false;
        }
      }
    };

    syncChanges();
  }, [netInfo.isConnected]));

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      fetchCars();
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo
            width={RFValue(108)}
            height={RFValue(12)}
          />
          {
            !loading
            && (
              <TotalCars>
                Total de
                {' '}
                {cars.length}
                {' '}
                carros
              </TotalCars>
            )
          }
        </HeaderContent>
      </Header>

      {loading ? <Load />
        : (
          <CarList
            data={cars}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Car data={item} onPress={() => handleCarDetails(item)} />}
          />
        )}
    </Container>
  );
}
