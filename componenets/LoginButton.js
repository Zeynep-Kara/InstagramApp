import React from 'react';
import {Text, View, StyleSheet,TouchableOpacity} from 'react-native';

const LoginButton = ({onPress}) =>{
    return(         
        <TouchableOpacity 
            style={styles.button} 
            onPress={onPress}
        >
            <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>        
    );
}

export default LoginButton;

const styles = StyleSheet.create({    
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14,
        paddingHorizontal: 151,
        borderRadius: 5,
        elevation: 3,
        backgroundColor: '#3797EF',
        marginVertical:25,
        marginBottom:20  
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
      
});
