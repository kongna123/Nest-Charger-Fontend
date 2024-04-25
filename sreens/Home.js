import { StyleSheet, Text, View,Image } from 'react-native'
import React ,{useState,useEffect}from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Home = () => {
    const[user,setUser] = useState({})
    const[isLoading,setIsLoading] = useState(true)

    const fetchUser = async (navigation) => {
        const accessToken = await AsyncStorage.getItem('@accessToken')
        const response = await fetch('https://www.melivecode.com/api/auth/user',{
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken,
              },
        })
        const data = await response.json()
        console.log(data)
        setUser(data.user)
        setIsLoading(false)
    }
    useEffect(() =>{
        fetchUser()
    },[isLoading])
  return (
    <View>
        {isLoading ?
        <Text>Meow</Text>
        :
        <View>
          <Text>Meow</Text>
        </View>
        }
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})