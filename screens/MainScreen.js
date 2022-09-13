import { StyleSheet, FlatList,Text , View, Pressable, Image} from 'react-native';
import React, { useEffect, useState } from 'react';
//import { SliderBox } from "react-native-image-slider-box";

import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import BottomTab from './BottomTab';
import Timeline from '../componenets/Timeline';

function MainScreen({route, navigation}){  

  const username = route.params.username;
  const password = route.params.password; 
  const token = route.params.t;  

  const [timeline, setTimeline] = useState([]);
  
  var a;
  var b;
  var line; 
  const Inventory = [];

  class Data {
    constructor(id, username, location, description) {
      this.id = id;
      this.username = username;
      this.location = location;
      this.likes = []
      this.description = description;
      this.images = [];
    }
  }   

  const MainHandler = (async() => {
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

    await fetch("https://stormy-forest-35855.herokuapp.com/timeline", requestOptions)
      .then(response => response.text())
      .then(result => {
        a=result;
        console.log(result);
      })
      .catch(error => console.log('error', error));    
    
    b= JSON.parse(a);  
    line = b.data.timeline;
  
  for (var i = 0; i < (line.length); i++) {
    var newPost = new Data(line[i].id, line[i].username, line[i].location, line[i].description);
    for (var j = 0; j < line[i].images.length; j++){
      newPost.images.push(line[i].images[j].url);
      newPost.likes = line[i].likes;
    }
    Inventory.push(newPost);
    }
    setTimeline(Inventory);

    console.log(timeline);
  });

  useEffect(() => {
    MainHandler();
  }, []);  

  function gotoProfile(){
    navigation.navigate('Profile', {username:username, password:password, t:token});
  };

  return (    
    <View style={{ flex: 1, marginBottom: 90}}>      
      <View style={styles.head}>        
        <Entypo name="lock" size={20} color="black" />
        <Pressable onPress={gotoProfile}>
          <Text style={styles.user}>{username}</Text>
        </Pressable>   
        <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />             
        <View  style={styles.emojis}>
          <AntDesign name="plussquareo" size={24} color="black" style={styles.emoji}/>
          <Octicons name="heart" size={24} color="black" style={styles.emoji}/>
          <AntDesign name="message1" size={24} color="black" style={styles.emoji}/> 
        </View>              
      </View>
      <View style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth}}/>      
      <Timeline timeline={timeline}/>
      <BottomTab onPress={gotoProfile} root={'main'}/>     
    </View>
  );
};

export default MainScreen;

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
    marginLeft:130,
    justifyContent:'space-between',
  }, 
  emoji:{
    marginRight:10
  }
});