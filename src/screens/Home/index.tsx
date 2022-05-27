/* eslint-disable react/jsx-no-bind */
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';
import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList,
} from './styles';
import api from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const carData = {
    brand: 'Audi',
    name: 'RS 5 Coupe',
    rent: {
      period: 'AO DIA',
      price: 120,
    },
    thumbnail: 'https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png',
  };

  function handleCarDetails() {
    navigation.navigate('CarDetails');
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/cars');
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  return (
    <Container>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <Header>
        <HeaderContent>
          <Logo
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>
            Total de 12 carros
          </TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={cars}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Car data={item} onPress={() => handleCarDetails()} />
        )}
      />

    </Container>
  );
}
