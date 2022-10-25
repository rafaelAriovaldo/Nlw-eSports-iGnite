
import { Text, TouchableOpacity, View } from 'react-native';
import { GameController } from 'phosphor-react-native';
import { THEME } from '../../theme';
import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';
export interface DuoCardProps {
  UseVoiceChannel: boolean,
  hourEnd: string,
  hoursStart: string,
  id: string,
  name: string,
  weekDays: string[],
  yearsPlaying: String;
}
interface Props {
  data: DuoCardProps;
  onConect: () => void;
}
export function DuoCard({ data,onConect }: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo
        label="Nome:"
        value={data.name}
      />
      <DuoInfo
        label="Tempo de Jogo:"
        value={`${data.yearsPlaying} anos.`}
      />
      <DuoInfo
        label="Disponibilidade:"
        value={`${data.weekDays.length} dias\u2022 ${data.hoursStart} - ${data.hourEnd}`}
      />
      <DuoInfo
        label="Chamada de áudio?"
        value={data.UseVoiceChannel ? "Sim" : "Não"}
        colorValue={data.UseVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={onConect}
        >
        <GameController 
          color={THEME.COLORS.TEXT}
          size={20}
        />


        <Text style={styles.buttonTitle}>
          Conectar
        </Text>
      </TouchableOpacity>
    </View>
  );
}