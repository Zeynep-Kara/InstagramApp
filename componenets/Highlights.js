import {Text, Image, View, StyleSheet, FlatList} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function Highlight({images}){ 

    return(
        <View style={styles.container}>
            <View style={styles.border}>
                <AntDesign name="pluscircleo" size={56} color="black" style={styles.image}/>                
            </View>
            {images?.map((image) => {
            return (
              <View key={image.id} style={styles.border}>                                
                <Image source={{uri: image.url}} style={styles.image}/>                                                                
              </View>              
            );
            })}       

        </View>        
    );
}

export default Highlight;

const styles = StyleSheet.create({    
    image: {
        width: 56,
        height:56,
        margin:5,
        borderRadius:28
    },
    container:{
        flexDirection:'row',
        alignItems:'center',
        alignContent:'center',
        marginLeft:35,
        marginTop:20

    },
    border:{
        borderColor:'grey',
        borderWidth:1,
        borderRadius:33,
        marginHorizontal:20
    }
});

