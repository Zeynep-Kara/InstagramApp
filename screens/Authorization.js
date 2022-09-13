import {Text, Image, View, StyleSheet, Pressable , TextInput} from 'react-native';
import { useState, useEffect } from 'react';

import LogIn from '../componenets/LogIn';
import LoginButton from '../componenets/LoginButton';

function Authorization({navigation}){
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState("");    

    const SignInHandler = async () => {
    
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          "username": userName,
          "password": password
        });     

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        var a;

        await fetch("https://stormy-forest-35855.herokuapp.com/login", requestOptions)
            .then(response => response.text())
            .then(result => {
                a=(result);
                console.log(result);  
            })
            .catch(error => console.log('error', error));
            
        console.log(JSON.parse(a).type);
        const t = (JSON.parse(a).data).token;
        console.log(t);        
            
        if(JSON.parse(a).type==true){
            navigation.navigate('Main', {username:userName, password:password, t:t});
        }else{
            console.log('wrong info');               
        }     
    }

    return(
        <View style={styles.ins}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <LogIn value={userName} setValue={setUserName} placeholder={'Username'} secure={false}/>
            <LogIn value={password} setValue={setPassword} placeholder={'Password'} secure={true} />
            <Text style={styles.forgotText}>Forgot password</Text> 
            <LoginButton onPress={SignInHandler}/>                                   
            <Text style={styles.facebookText}>Log in with Facebook</Text>
            <Text style={styles.orText}>OR</Text>
            <View style={{flexDirection: "row"}}>
                <Text style={styles.accountText}>Don't have an account?</Text>
                <Text style={styles.signupText}> SignUp.</Text>
            </View>            
        </View>        
    );
}

export default Authorization;

const styles = StyleSheet.create({    
    ins:{
        flex:1,
        alignItems:'center',
        marginTop:168,
    },
    logo:{
        padding:20,
        marginBottom:41
    },    
    facebookText:{
        color:'#3797EF',
        fontSize:14,
        fontWeight:"600"
    },
    orText:{
        color:'black',
        opacity:0.4,
        fontSize:12,
        fontWeight:"600",
        marginVertical:30
    },
    accountText:{
        color:'black',
        opacity:0.4,
        fontSize:14,
        fontWeight:"400"
    },
    signupText:{
        color:'#3797EF',
        fontSize:14,
        fontWeight:"400"
    },
    forgotText:{
        marginVertical:19,
        marginLeft:253,
        marginRight:20,
        textAlign:'right',
        color:'#3797EF'
    }
});