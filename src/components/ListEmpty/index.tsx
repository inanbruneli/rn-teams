import React from 'react';
import { Container, Message } from './styles';

interface Props {
  messege: string;
}

export default function ListEmpty({ messege }: Props) {
  return (
    <Container>
      <Message>{messege}</Message>
    </Container>
  );
}