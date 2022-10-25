import { Entypo } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/background';
import { useRoute,useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { GameParams } from '../../@types/navigation';
import { Image, Touchable, TouchableOpacity, View } from 'react-native';
import { THEME } from '../../theme';
import logoImg from '../../assets/Games/Logo.png'
import { Heading } from '../../components/background/Heading';
import { DuoCard } from '../../components/DuoCard';
export function Game() {
    const route = useRoute();
    const navigation = useNavigation();
    const game = route.params as GameParams;
    function handLegoBack (){
        navigation.goBack();
    } 
    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handLegoBack}>
                        <Entypo
                            name='chevron-thin-left'
                            color={THEME.COLORS.CAPTION_300}
                            size={20}
                        />
                    </TouchableOpacity>

                    <Image
                        source={logoImg}
                    />
                    <View style={styles.right}/>
                </View>

                <Image
                
                source={{ uri: game.bannerUrl}}
                style={styles.cover}
                resizeMode="cover"
                />

                <Heading
                title={game.title}
                subtitle="Conecte e comece a jogar!"
                />
                <DuoCard/>
            </SafeAreaView>
        </Background>
    );
}
