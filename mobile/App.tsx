import { StatusBar } from 'react-native';
import { useRef, useEffect } from 'react'
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';

import { Routes } from './src/routes';

import { Subscription } from 'expo-modules-core'
import { Background } from './src/components/background';

import { Loading } from './src/components/Loading';
import './src/service/notification';
import { getPushnotify } from './src/service/getPushNotify'
import * as Notification from 'expo-notifications';
export default function App() {
  const getNotificationListen = useRef<Subscription>();
  const responseNotificationListen = useRef<Subscription>();
  useEffect(() => {
    getPushnotify();
  });
  useEffect(() => {
    getNotificationListen.current = Notification.addNotificationReceivedListener(notification => {
      console.log(notification)
    });
    

    responseNotificationListen.current = Notification.addNotificationReceivedListener(response =>
      console.log(response));

      return() =>{
        if(getNotificationListen.current && responseNotificationListen.current)
        Notification.removeNotificationSubscription(getNotificationListen.current);
        Notification.removeNotificationSubscription(responseNotificationListen.current);
        
      }
  }, []);
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </Background>
  );
}