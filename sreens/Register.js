import { View, Text, StyleSheet, Image } from 'react-native';
import { TextInput, Button  } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import { black, white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const Register = ({navigation}) => {

    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const [Email , setEmail] = useState("");
    const [Confirm , setConfirm] = useState("");
    
  return (
    <View style={{flex : 1}}>
        <View style={{flexDirection : 'row' , justifyContent : 'flex-start' , alignItems: 'flex-start' ,paddingBottom : 40, paddingTop : 10,paddingLeft : 5}}>
            <Button onPress={() => navigation.goBack()}>
                <Text style={{color : 'black'}}>Go back</Text>
            </Button>
        </View>
        <View style={{justifyContent : 'center' , alignItems : 'center',paddingBottom : 30}}>
                <Text style={styles.fontcontainer}>Create an account</Text>
        </View>
        <View style={styles.Textinputcontainer}>
            <TextInput
            mode="outlined"
            label="Username"
            value={Username}
            onChangeText={text => setUsername(text)}
            />
        </View>
        <View style={styles.Textinputcontainer}>
            <TextInput
            mode="outlined"
            label="Email"
            value={Email}
            onChangeText={text => setEmail(text)}
            />
        </View>
        <View style={styles.Textinputcontainer}>
            <TextInput
            mode="outlined"
            label="Password"
            value={Password}
            onChangeText={text => setPassword(text)}
            />
        </View>
        <View style={styles.Textinputcontainer}>
            <TextInput
            mode="outlined"
            label="Confirm Password"
            value={Confirm}
            onChangeText={text => setConfirm(text)}
            />
        </View>
        <View style={{flex : 1, paddingTop : 35}}>
            <Button style={styles.logincontainer} mode="contained" onPress={() => console.log('Pressed')}>
                Register
            </Button>
        </View>
        <View style={{flex : 0.25 , flexDirection : 'row' ,justifyContent : 'center' , alignItems : 'center'}}>
            <View>
                <Text >Already have an account?</Text>
            </View>
            <View>
                <Button onPress={() => navigation.navigate('Login')}> 
                    <Text style={{color : 'darkturquoise'}}>Login Now</Text>
                </Button>
            </View>
        </View>
    </View>
  )
};

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logincontainer: {
        borderRadius: 5, 
        width: 351,
        alignSelf: 'center',
        backgroundColor: 'black',
        padding: 8
    },
    Textinputcontainer: {
        margin: 5,
        marginRight: 20,
        marginLeft: 30,
    },
    fontcontainer: {
        color : 'black',
        fontWeight: 'bold',
        fontSize: 30,
    },
  });