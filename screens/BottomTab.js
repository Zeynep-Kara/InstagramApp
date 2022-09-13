import { StyleSheet, FlatList,Text , View, Pressable, Image} from 'react-native';

import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 

function BottomTab({onPress, root}){ 

    var main= false;
    var profile= false;
    var mainColor= 'black' ;
    var profileColor= 'black';

    if(root=='main'){
        main=true;
        profileColor= 'grey'

    }else{
        profile=true;        
        mainColor= 'grey' 
    }

    return(   
    <View style={styles.container}>
        <Pressable disabled={main} onPress={onPress} style={styles.hometab}>
            <Entypo name="home" size={24} color={mainColor}/>
            <Text>Main</Text>
        </Pressable>
        <Pressable disabled={profile} onPress={onPress} style={styles.profiletab}>
            <FontAwesome name="user" size={24} color={profileColor}/>
            <Text style={styles.profileText}>Profile</Text>
        </Pressable>                
    </View>     
    );
}

export default BottomTab;

const styles = StyleSheet.create({    
    hometab:{
        position: 'absolute',
        bottom:0, 
        backgroundColor:'white',
        flex:1,
        paddingVertical:5,
        paddingHorizontal:100,
        flexDirection:'column',        
    },
    profiletab:{
        position: 'absolute',
        bottom:0, 
        left:230,
        backgroundColor:'white',
        flex:1,
        paddingLeft:50,
        paddingVertical:5,
        paddingRight:80,
        flexDirection:'column',
    },
    container:{
        flexDirection:'row'
    },
    profileText:{
        paddingRight:100
    } 
  });