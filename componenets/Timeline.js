import { StyleSheet, FlatList,Text , View, Pressable, Image} from 'react-native';
import ImageSliderBox from '../componenets/ImageSlider';

import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function Timeline({timeline}){
    return(
        <View>
            <FlatList
                data={timeline}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <View style={styles.timeline}>
                    <View style={{ flexDirection: 'row'}}>
                      <Image source={{uri: item.images[0]}} style={styles.miniProfile}/>
                      <View style={{ flexDirection: 'column'}}>
                        <Text style={styles.friend}>{item.username}</Text>
                        <Text style={{fontSize:13}}>{item.location}</Text>                       
                      </View>
                      <Entypo name="dots-three-horizontal" size={24} color="black" style={{marginLeft:180}}/> 
                    </View>
                    <ImageSliderBox imageArray={item.images}/>            
                    <View  style={styles.share}>              
                      <Octicons name="heart" size={24} color="black" style={styles.emoji}/>
                      <AntDesign name="message1" size={24} color="black" style={styles.emoji}/>
                      <Ionicons name="md-arrow-redo-outline" size={24} color="black" style={styles.emoji}/>
                    </View>
                    <Text>Liked by <Text style={{ fontWeight:'bold'}}>{item.likes[0]}</Text> and <Text style={{ fontWeight:'bold'}}>{item.likes.length} others</Text></Text>
                    <View style={{ flexDirection: 'column', fontSize:15}}>
                      <Text style={{fontWeight:'bold'}}>{item.username}</Text>
                      <Text>{item.description}</Text>       
                    </View>         

                  </View>          
                )}
              />
        </View>
    );
}

export default Timeline;

const styles = StyleSheet.create({   
    
    timeline:{
      padding:20,
      borderBottomColor: 'black',
      borderBottomWidth: StyleSheet.hairlineWidth, 
    },
    friend:{
      fontWeight:'bold',
      fontSize:15,
    },
    emojis:{
      alignItems:'flex-end',
      flexDirection:'row',
      marginLeft:130,
      justifyContent:'space-between',
    }, 
    emoji:{
      marginRight:10
    },
    miniProfile:{
      height:40,
      width:40,
      borderRadius:20,
      borderWidth:1,
      borderColor:'black',
      marginRight:10,
      marginBottom:10
    }, 
    share:{
      flexDirection:'row',
      marginTop:5
    }, 
  });