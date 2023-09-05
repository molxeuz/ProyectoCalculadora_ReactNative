import { Image, Text, View } from 'react-native'

export default function Header(){
    return(
        <Image style={{width: '80%', height: '15%'}} source={require('../assets/images/Hola.jpg')} />
    );
}