
import { View, Image } from 'react-native';

import logoImg from '../../assets/Games/Logo.png'
import { Heading } from '../../components/background/Heading';
import { GameCard } from '../../components/GameCard';
import{GAMES} from '../../utils/games';
import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Image
      source={logoImg}
      style={styles.logo}
      />
      <Heading
      title="Encontre seu Duo"
      subtitle="Selecione o game que deseja jogar..."
       />

       <GameCard 

      data={GAMES[0]}

       />
    </View>
  );
}