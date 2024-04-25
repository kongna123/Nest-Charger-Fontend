import { View, Text, StyleSheet, Image } from 'react-native';
import { TextInput, Button  } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import { black, white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const ForgetPassword = ({navigation}) => {
    const [username, setUsername] = useState("");

    return (
        <View style={{flex : 1}}>
            <View style={styles.buttoncontainer}>
                <Button onPress={() => navigation.goBack()}>
                    <Text style={{color : 'black'}}>Go back</Text>
                </Button>
            </View>
            <View style={{justifyContent : 'center' , alignItems : 'center'}}>
                <View style={{width : 275 , height : 50}}>
                    <Text style={styles.fontcontainer}>Forgot Password?</Text>
                </View>
            </View>
            <View style={{justifyContent : 'center' , alignItems : 'center'}}>
                <View style={{width : 275 , height : 60 }}>
                    <Text style={styles.fontSizecontainer}>Don't worry! It occurs. Please enter the email address linked with your account.</Text>
                </View>
            </View>
            <View style={styles.Textinputcontainer}>
                <TextInput
                mode="outlined"
                label="Enter your email"
                value={username}
                onChangeText={text => setUsername(text)}
                />
            </View>
            <View style={{flex : 1 ,}}>
                <Button style={styles.logincontainer} mode="contained" onPress={() => console.log('Pressed')}>
                    Send Code
                </Button>
            </View>
            <View style={{flex : 0.15 , flexDirection : 'row' ,justifyContent : 'center' , alignItems : 'center'}}>
                <View>
                    <Text>
                        Remember Password?
                    </Text>
                </View>
                <View>
                    <Button onPress={() => navigation.navigate('Login')}>
                        <Text style={{color : 'darkturquoise'}}>
                            Login
                        </Text>
                    </Button>
                </View>
            </View>
        </View>
    )
}

export default ForgetPassword

const styles = StyleSheet.create({
    buttoncontainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start', 
        paddingTop : 10,
        paddingBottom : 30
    },
    fontcontainer: {
        color : 'black',
        fontWeight: 'bold',
        fontSize: 30,
    },
    Textinputcontainer: {
        margin: 5,
        marginRight: 20,
        marginLeft: 30,
        paddingTop : 5
    },
    logincontainer: {
        borderRadius: 5, 
        width: 351,
        alignSelf: 'center',
        padding: 8,
        marginTop : 20,
        backgroundColor : 'black'
    },
    fontSizecontainer: {
        color : 'black',
        fontSize : 15
    },
});