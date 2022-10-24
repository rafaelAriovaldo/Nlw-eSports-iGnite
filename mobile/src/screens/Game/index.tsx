import { Entypo } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/background';
import { useRoute } from '@react-navigation/native';
import { styles } from './styles';
import { GameParams } from '../../@types/navigation';
import { Image, Touchable, TouchableOpacity, View } from 'react-native';
import { THEME } from '../../theme';
import logoImg from '../../assets/Games/Logo.png'
export function Game() {
    const route = useRoute();
    const game = route.params as GameParams;

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Entypo
                            name='chevron-thin-left'
                            color={THEME.COLORS.CAPTION_300}
                            size={20}
                        />
                    </TouchableOpacity>

                    <Image
                        source={logoImg}
                    />

                </View>

            </SafeAreaView>
        </Background>
    );
}
