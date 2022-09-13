import {Text, View, StyleSheet, FlatList, Image, Pressable} from 'react-native';
import { useState, useEffect } from 'react';
import BottomTab from '../screens/BottomTab';
import ImageSliderBox from '../componenets/ImageSlider';

function PostDetailsScreen({route}){

    const username = route.params.username;
    const password = route.params.password; 
    const token = route.params.t; 
    const [profilePosts, setProfilePosts] = useState([]);
    const Inventory = [];
    var a;
    var post;

    class Data {
      constructor(description) {
        this.description = description;
        this.images = [];
      }
    }   

    const ProfileHandler = (async() => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", token);
        
        var raw = JSON.stringify({
          "username": username,
          "password": password
        });
    
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          body: null,
          redirect: 'follow'
        };
    
        await fetch("https://stormy-forest-35855.herokuapp.com/profile", requestOptions)
          .then(response => response.text())
          .then(result =>{
            a=result;
            console.log(result);
          })
          .catch(error => console.log('error', error));
         
        
        post = JSON.parse(a).data.posts;

        console.log(post);

        for (var i = 0; i < (post.length); i++) {
          var newPost = new Data(post[i].description);
          for (var j = 0; j < post[i].images.length; j++){
            newPost.images.push(post[i].images[j].url);
          }
          Inventory.push(newPost);
        }
        setProfilePosts(Inventory);

        console.log(profilePosts);
    });

    useEffect(() => {
        ProfileHandler();
      }, []);
    

    return(
        <View style={styles.container}>
            <FlatList
                data={profilePosts}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <View style={styles.posts}>
                        <ImageSliderBox imageArray={item.images}/>
                        <Text style={styles.text}>{item.description}</Text> 
                    </View>                    
                )}      
            />
        </View>    
    );
}

export default PostDetailsScreen;

const styles = StyleSheet.create({ 
    posts:{
      padding:20,
      borderBottomColor: 'black',
      borderBottomWidth: StyleSheet.hairlineWidth, 
    },
    container:{
      marginTop:30,
    },  
    text:{
        fontSize:16,
        marginTop:5
    }  
  });