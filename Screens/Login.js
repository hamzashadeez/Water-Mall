import React, {useState, useContext, useEffect} from 'react';
import {Ionicons} from '@expo/vector-icons'
import {Pressable, StyleSheet, Text, TextInput, View, ActivityIndicator} from 'react-native';
import {UserContext} from '../UserContext'
import {Log} from '../log'

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useContext(UserContext)

  
  useEffect(()=>{
    setLoading(false)
  }, [])

  const Login = () => {
    // alert('hey');
    const data = {}
    setUser({...data, isSigned: true});
    navigation.navigate('Main');
    console.log(user)
    // setLoading(true)
};
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 25,
          textAlign: 'center',
          marginTop: 30,
          letterSpacing: 1,
          color: 'white'
        }}>
        Login
      </Text>
      <Text
        style={{
          textAlign: 'center',
          marginTop: 5,
          fontSize: 15,
          color: 'white'
        }}>
        Login in to Water Mall
      </Text>
      <View style={styles.innerContainer}>
        {/* <Image alt='img' style={styles.img} source={require('../../assets/img/logo.png')}/> */}
        <View
          style={{
            flexDirection: 'row',
            // marginBottom: SIZES.s2,
            alignItems: 'center',
          }}>
          <Ionicons name="person-sharp" size={20} color='gray' />
          <TextInput
            style={styles.input}
            placeholder="Enter Email Address"
            value={email}
            onChange={e => setEmail(e.nativeEvent.text)}
          />
        </View>
        
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Ionicons name="lock-closed" size={20} color="gray" />
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            secureTextEntry={true}
            value={password}
            onChange={e => setPassword(e.nativeEvent.text)}
          />
        </View>
      
        {/* SignUp Button */}
        <Pressable style={styles.btn} onPress={() => Login()}>
          {loading ? (
            <ActivityIndicator size="small" color="#ffffff" />
          ) : (
            <Text
              style={{
                textAlign: 'center',
                color: "white",
                fontSize: 15,
              }}>
              Login
            </Text>
          )}
        </Pressable>
      <View style={{marginTop: 20, flexDirection: "row", justifyContent: 'space-around', alignItems: "center"}}>
          <Text style={{color: "seagreen", fontSize: 17}}>New User?</Text>
          <Pressable style={styles.login} onPress={()=> navigation.navigate('Register')}>
            <Text style={{color: "white",fontSize: 17}}>Register</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
  },
  innerContainer: {
    backgroundColor: '#fff',
    marginTop: 20,
    borderTopLeftRadius: 10,
    padding: 15,
    borderTopRightRadius: 10,
    width: '94%',
    marginHorizontal: '3%',
    elevation: 2,
  },
  input: {
    marginLeft: 10,
    width: '90%',
    fontSize: 15,
    paddingVertical: 13,
  },
  login:{
    backgroundColor: 'seagreen',
    elevation: 4,
    paddingHorizontal: 20,
    paddingVertical: 7
  },
  btn: {
    backgroundColor: 'dodgerblue',
    elevation: 4,
    padding: 7,
    marginTop: 15,
  },
  img: {
    width: 90,
    height: 90,
    marginBottom: 20,
    marginLeft: '%',
  },
});
