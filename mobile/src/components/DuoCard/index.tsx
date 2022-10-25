import React from 'react';
import { View } from 'react-native';
import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';
export interface DuoCardProps{
  UseVoiceChannel: true,
  hourEnd: string,
  hoursStart: string,
  id: string,
  name: string,
  weekDays:string[],
  yearsPlaying: String;
}
interface Props{
  data: DuoCardProps;
}
export function DuoCard({data}: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo
      label="Nome:"
      value={data.name}
      />
      <DuoInfo
      label="Tempo de Jogo"
      value={`${data.yearsPlaying} anos.`}
      />
      <DuoInfo
      label="Disponibilidade"
      value={`${data.weekDays.length} dias` }
      />
      <DuoInfo
      label="Nome:"
      value="Rafael Souza"
      />
    </View>
  );
}