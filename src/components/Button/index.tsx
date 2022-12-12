import React from 'react';
import { TouchableOpacityProps } from 'react-native'
import { Container, ButtonTypeStyleProps, Title } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  type?: ButtonTypeStyleProps;
}

export default function Button({ title, type = 'PRIMARY', ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}