import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import {
  Container,
  Header,
  Title,
  SubTitle,
  Footer,
  Form,
} from './styles';

export function SignIn() {
  const theme = useTheme();
  return (
    <Container>
      <StatusBar style="dark" translucent backgroundColor="transparent" />
      <Header>
        <Title>
          Estamos
          {'\n'}
          quase la
        </Title>
        <SubTitle>
          Faça seu login para começar
          {'\n'}
          uma experiência incrível.
        </SubTitle>
      </Header>
      <Form>
        <Input />
      </Form>
      <Footer>
        <Button
          title="Login"
          onPress={() => { }}
          enabled={false}
          loading={false}
        />
        <Button
          title="Criar conta gratuita"
          color={theme.colors.background_secondary}
          onPress={() => { }}
          enabled
          light
          loading={false}
        />
      </Footer>

    </Container>
  );
}
