import React, { useState } from 'react';
import { View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { styles } from './styles';
import { THEME } from '../../theme';
import { CheckCircle } from 'phosphor-react-native'
import { Heading } from '../background/Heading';
import * as Clipboard from 'expo-clipboard'; 
interface Props extends ModalProps {
    discord: string;
    onClose: () => void;
}
export function DuoMAth({ discord, onClose, ...rest }: Props) {
    const [copy, setCopy] = useState(false);
    async function CopyUserDiscord() {
        setCopy(true);
        await Clipboard.setStringAsync(discord);
        Alert.alert('Dicord copiado!')
        setCopy(false);
    }
    return (
        <Modal
        animationType='fade'
            transparent
            statusBarTranslucent
            {...rest}
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity
                        style={styles.closeIcon}
                        onPress={onClose}
                    >
                        <MaterialIcons
                            name='close'
                            size={20}
                            color={THEME.COLORS.CAPTION_500}
                        />
                    </TouchableOpacity>
                    <CheckCircle
                        size={64}
                        color={THEME.COLORS.SUCCESS}
                        weight="bold"

                    />
                    <Heading
                        title="Lest´s play"
                        subtitle="Agora é só começar a jogar"
                        style={{ alignItems: 'center', marginTop: 24 }}
                    />
                    <Text style={styles.label}>
                        Adicione seu Discord
                    </Text>
                    <TouchableOpacity
                     style={styles.discordButton}
                     onPress={CopyUserDiscord}
                     disabled={copy}
                     >
                        <Text style={styles.discord}>
                            {copy ? <ActivityIndicator color={THEME.COLORS.PRIMARY}/> : discord}
                        </Text>

                    </TouchableOpacity>

                </View>
            </View>
        </Modal>
    );
}