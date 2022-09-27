
import { View, Image } from 'react-native';

import logoImg from '../../assets/Games/Logo.png'
import { Heading } from '../../components/background/Heading';

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
    </View>
  );
}