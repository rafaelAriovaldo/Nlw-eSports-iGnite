import { useEffect, useState } from 'react';
import { Image, FlatList } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import logoImg from '../../assets/Games/Logo.png'
import { Heading } from '../../components/background/Heading';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { GAMES } from '../../utils/games';
import { styles } from './styles';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([])
  useEffect(() => {
    fetch('http://192.168.10.10:3000/games')
    .then(res => res.json())
    .then(data => setGames(data))

  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={logoImg}
        style={styles.logo}
      />
      <Heading
        title="Encontre seu Duo!!"
        subtitle="Selecione o game que deseja jogar..."
      />
      <FlatList
        data={games}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <GameCard
            data={item}
          />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}
      />

    </SafeAreaView>
  );
}