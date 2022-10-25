import React from 'react';
import { View } from 'react-native';
import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';
export

export function DuoCard() {
  return (
    <View style={styles.container}>
      <DuoInfo
      label="Nome:"
      value="Rafael Souza"
      />
      <DuoInfo
      label="Nome:"
      value="Rafael Souza"
      />
      <DuoInfo
      label="Nome:"
      value="Rafael Souza"
      />
      <DuoInfo
      label="Nome:"
      value="Rafael Souza"
      />
    </View>
  );
}