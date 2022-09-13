import {Text, StyleSheet, View,Image} from 'react-native';

function ProfileData({profileData}){
    return(
        <View style={styles.border}>
            <Image source={{uri: profileData.profile_photo}} style={styles.image}/>
            <View style={{ flexDirection: 'column', marginTop:20, marginLeft:10}}>               
                <Text style={styles.font}>{profileData.full_name}</Text>    
                <Text style={{ fontSize:16}}>{profileData.profile_text}</Text>
            </View>                                                                
        </View>        
    );
}

export default ProfileData;

const styles = StyleSheet.create({
    image: {
        width: 86,
        height: 86,
        margin:5,
        borderRadius:43
    },
    border:{      
        marginLeft:25,
        marginBottom:20,
        flexDirection:'row'
    },
    font:{
        fontSize:20,
        fontWeight:'bold'
    }    
});