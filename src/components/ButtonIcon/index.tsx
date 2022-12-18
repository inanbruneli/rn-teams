import React from 'react';
import { TouchableOpacityProps } from 'react-native'
import { Container, Icon, ButtonIconTypeStyleProps } from './styles';
import { MaterialIcons } from '@expo/vector-icons'

interface Props extends TouchableOpacityProps {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps;
}

export default function ButtonIcon({ icon, type = 'PRIMARY', ...rest }: Props) {
  return (
    <Container >
      <Icon name={icon} type={type} />
    </Container>
  );
}