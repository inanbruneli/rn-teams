import React, { useState } from 'react';
import { FlatList } from 'react-native';

import { Header } from '@components/Header';
import HighLight from '@components/HighLight';
import ButtonIcon from '@components/ButtonIcon';
import Filter from '@components/Filter';
import Input from '@components/Input';

import { Container, Form, HeaderList, NumberPlayers } from './styles';
import PlayerCard from '@components/PlayerCard';
import ListEmpty from '@components/ListEmpty';
import Button from '@components/Button';

export default function Players() {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState(['Inan'])

  return (
    <Container>
      <Header showBackButton />
      <HighLight title='Nome da turma' subtitle='adicione a galera e divida os times' />

      <Form>
        <Input placeholder='Nome da pessoa' autoCorrect={false} />
        <ButtonIcon icon='add' />
      </Form>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter title={item} isActive={item === team} onPress={() => setTeam(item)} />
          )}
          horizontal
        />
        <NumberPlayers>{players.length}</NumberPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => { }} />
        )}
        ListEmptyComponent={() => <ListEmpty messege='Não há pessoas nesse time' />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{ paddingBottom: 100 }, players.length == 0 && { flex: 1 }]}
      />
      <Button title='Remover turma' type="SECONDARY" />
    </Container>
  );
}