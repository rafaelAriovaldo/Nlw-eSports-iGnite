import { Entypo } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/background';
import { useRoute, useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { GameParams } from '../../@types/navigation';
import { FlatList, Image, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { THEME } from '../../theme';
import logoImg from '../../assets/Games/Logo.png'
import { Heading } from '../../components/background/Heading';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { useEffect, useState } from 'react';
import {DuoMAth} from '../../components/DuoMAth'

export function Game() {
    const route = useRoute();
    const navigation = useNavigation();
    const game = route.params as GameParams;
    const [duos, setDuos] = useState<DuoCardProps[]>([]);
    const [discordDuoSelected, setDuoSelect] = useState('');
    function handLegoBack() {
        navigation.goBack();
    }

    useEffect(() => {
        fetch(`http://192.168.10.10:3000/ads/${game.id}/ads`)
            .then(res => res.json())
            .then(data => setDuos(data));


    }, []);

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
                    <View style={styles.right} />
                </View>

                <Image

                    source={{ uri: game.bannerUrl }}
                    style={styles.cover}
                    resizeMode="cover"
                />

                <Heading
                    title={game.title}
                    subtitle="Conecte e comece a jogar!"
                />
                <FlatList
                    data={duos}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <DuoCard data={duos[0]}
                            onConect={() => { }}
                        />
                    )}
                    horizontal
                    style={styles.containerList }
                    contentContainerStyle={[, duos.length > 0 ? styles.contentList : styles.EmpetyListContent]}
                    showsHorizontalScrollIndicator={false}

                    ListEmptyComponent={()=>(
                        <Text style={styles.listEmpy}>
                            Nao há anúncios publicados no momento.
                        </Text>
                    )}
                />
                <DuoMAth 
                visible={discordDuoSelected.length > 0}
                discord="Jubarti"
                onClose={() => setDuoSelect('')}
                />

            </SafeAreaView>
        </Background>
    );
}
