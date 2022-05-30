import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
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
  const [password, setPassword] = useState('');
  return (
    <KeyboardAvoidingView
      behavior="position"
      enabled

    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
            />
            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
            />
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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
