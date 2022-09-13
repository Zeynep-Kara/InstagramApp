import {Text, StyleSheet, View} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

function ProfileHead({profileData}){
    return(
        <View style={styles.head}>        
            <Entypo name="lock" size={20} color="black" />            
            <Text style={styles.user}>{profileData.username}</Text>               
            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" style={styles.headleft}/>             
            <View  style={styles.emojis}>
                <AntDesign name="plussquareo" size={24} color="black" style={styles.emoji}/>
                <MaterialIcons name="menu" size={26} color="black" style={styles.emoji}/>
            </View>           
        </View>
    );
}

export default ProfileHead;

const styles = StyleSheet.create({    
    user: {
        fontWeight:'bold',
        fontSize:18,        
    },
    head:{
        flexDirection:'row',
        marginTop:30,
        padding:20,
    },
    emojis:{
        alignItems:'flex-end',
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:160
    }, 
    emoji:{
        marginHorizontal:5
    }
});