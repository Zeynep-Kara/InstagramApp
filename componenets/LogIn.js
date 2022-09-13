import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

const LogIn = ({value, setValue, placeholder, secure}) =>{
    return(         
        <View style={styles.inputContainer}>
            <TextInput
                value={value}         
                onChangeText={setValue}
                style={styles.inputText}
                placeholder={placeholder}
                secureTextEntry={secure}           
            />    
        </View>            
    );
}

export default LogIn;

const styles = StyleSheet.create({    
    inputContainer:{
        borderColor:'black',
        borderWidth:1,
        opacity:0.4,
        marginVertical:6
    },
    inputText:{
        height:40,
        color:'black',
        fontSize:14,
        marginVertical:1,
        paddingLeft:15,
        paddingRight:253,
    }  
});