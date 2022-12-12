import React from 'react';
import { TouchableOpacityProps } from 'react-native'


import { Container, Icon } from './styles';

interface Props extends TouchableOpacityProps {
  icon: string;
  type?: 
}

export default function ButtonIcon({ }: Props) {
  return (
    <Container >
      <Icon name='home' type='PRIMARY' />
    </Container>
  );
}