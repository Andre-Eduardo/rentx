import React from 'react';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer,
} from './styles';
import { Button } from '../../components/Button';

export function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => { }} />
      </Header>
      <CarImages>
        <ImageSlider imagesUrl={['https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png']} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao Dia</Period>
            <Price>R$580</Price>
          </Rent>
        </Details>
        <Accessories>
          <Accessory name="380km" icon={SpeedSvg} />
          <Accessory name="380km" icon={AccelerationSvg} />
          <Accessory name="380km" icon={ForceSvg} />
          <Accessory name="380km" icon={GasolineSvg} />
          <Accessory name="380km" icon={SpeedSvg} />
          <Accessory name="380km" icon={SpeedSvg} />
        </Accessories>
        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça
          Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
        </About>
      </Content>
      <Footer>
        <Button title="Confirmar" />
      </Footer>
    </Container>
  );
}
