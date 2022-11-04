import * as Notifications from 'expo-notifications';

export async function getPushnotify() {
    const {granted} = await Notifications.getPermissionsAsync();
    if(!granted){
        await Notifications.requestPermissionsAsync();
    }
    if(granted){
        const pushToken = await Notifications.getDevicePushTokenAsync();
        console.log('Notification token')
        return pushToken.data    
    }
}