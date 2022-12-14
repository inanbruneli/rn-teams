import { useState } from 'react'
import { FlatList } from 'react-native';
import GroupCard from '@components/GroupCard';
import { Header } from '@components/Header';
import HighLight from '@components/HighLight';
import React from 'react';
import { Container } from './styles';
import ListEmpty from '@components/ListEmpty';
import Button from '@components/Button';
import { useNavigation } from '@react-navigation/native'


export default function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();
  return (
    <Container>
      <Header />

      <HighLight title='Turmas' subtitle='jogue com sua turma' />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        ListEmptyComponent={() => <ListEmpty messege='Que tal cadastrar a primeira turma?' />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
      />

      <Button title='Criar nova turma' onPress={() => navigation.navigate('newGroup')} />
    </Container>
  );
}