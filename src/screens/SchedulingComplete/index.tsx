import React from 'react';

import { useWindowDimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import {
  Container,
  Content,
  Title,
  Message,
  Footer,
} from './styles';
import { ConfirmButton } from '../../components/ConfirmButton';

export function SchedulingComplete() {
  const { width } = useWindowDimensions();
  return (
    <Container>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro Alugado!</Title>
        <Message>
          Agora você só precisa ir
          {'\n'}
          até a concessionaria da Rentx
          {'\n'}
          pegar o seu automóvel
        </Message>

      </Content>
      <Footer>
        <ConfirmButton title="OK" />
      </Footer>
    </Container>
  );
}
