import {Text, View, StyleSheet, TouchableOpacity, Image, FlatList} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import BottomTab from '../screens/BottomTab';

function Posts({postData, onPress, gotoPostDetail}){

    return(
        <View style={{ marginBottom: 100}}>
            <View style={styles.tabContainer}>
                <MaterialCommunityIcons name="grid" size={28} color="black" style={styles.tabs}/>
                <AntDesign name="user" size={28} color="grey" style={styles.tabs}/>                
            </View>
            <View style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth}}/>

            <FlatList
                data={postData}
                keyExtractor={(item) => item.id}
                numColumns={3}
                renderItem={({ item }) => (
                  <View >
                    <TouchableOpacity onPress={gotoPostDetail}>
                        <Image source={{uri: item.images[0].url}} style={styles.logo}/>
                    </TouchableOpacity> 
                 </View>          
                )}
            />
            <View style={{marginBottom:20}}/>    
            <BottomTab onPress={onPress} root={'profile'}/>     
            
            {/*postData?.map((post) => {
                return (
                  <View key={post.id} >                    
                    <Text style={styles.text}>{post.description}</Text>                                                             
                  </View>              
                );
            })*/}                  
          
        </View>          
    );
}

export default Posts;

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection:'row',
        alignContent:'center',
        marginHorizontal:10,
        marginVertical:10
    },
    tabs:{
        marginHorizontal:80
    },
    image:{
        width: '100%',
        height: 200,
    },
    text:{
        fontSize:15,
        marginBottom:15,
        marginHorizontal:10
    },
    logo: {
        width: 128,
        height: 128,
        margin:1
    },
});