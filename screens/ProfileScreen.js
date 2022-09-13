import { useState, useEffect } from 'react';
import {Text, StyleSheet, View, Image, Flatlist} from 'react-native';

import ProfileHead from '../componenets/ProfileHead';
import ProfileData from '../componenets/ProfileData';
import Highlight from '../componenets/Highlights';
import Posts from '../componenets/Posts';
import BottomTab from './BottomTab';
import ImageSliderBox from '../componenets/ImageSlider';

function ProfileScreen({route, navigation}){

    const username = route.params.username;
    const password = route.params.password; 
    const token = route.params.t; 
      
    var a;
    var post;
    const [profileData, setProfileData] = useState([]);
    const [profilePosts, setProfilePosts] = useState([]);
    const Inventory = [];

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
         
        setProfileData(JSON.parse(a).data);
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


    function gotoMain(){
      navigation.navigate('Main', {username:username, password:password, t:token});
    };

    function gotoPostDetail(){
      navigation.navigate('PostDetail', {username:username, password:password, t:token});
    };
    

    return(
        <View style={{ flex: 1}}>     
            <ProfileHead profileData={profileData}/>  
            <ProfileData profileData={profileData}/>
            <View style={styles.textBorder}>
                <Text style={styles.editText}>Edit Profile</Text>
            </View>  
            <Highlight images={profileData.highlights}/>  
            <View style={{marginTop:20, borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth}}/>
            <Posts postData={profileData.posts} onPress={gotoMain} gotoPostDetail={gotoPostDetail} />            
       </View>               
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({    
    textBorder:{
        borderColor:'grey',
        borderRadius:10,
        marginHorizontal:20,
        backgroundColor:'#D5D4D7',
        textAlign:'center'
    },
    editText:{
        margin:5,
        textAlign:'center' ,
        fontSize:13,
        fontWeight:'bold'

    }
});