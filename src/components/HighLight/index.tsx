import React from 'react';

import { Container, Subtitle, Title } from './styles';

interface Props {
  title: string;
  subtitle: string;
}

export default function HighLight({ title, subtitle }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}