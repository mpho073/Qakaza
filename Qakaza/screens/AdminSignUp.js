import { StyleSheet, Text, View, TextInput, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { registrationAdmin } from '../service';

const AdminSignUp = ({navigation}) => {

  
    const [administration, setAdminstration] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordconfirm, setPasswordconfirm] = useState('');

    const handlePress = () => {
    
        if (!administration) {
            alert('Email field is required*.');
        }
        if (!email) {
            alert('Email field is required*.');
        }

        if (!password) {
            alert('Password field is required*.');
        }
        if (!passwordconfirm) {
            alert('Password field is required*.');
        }
        if (administration && email && password && passwordconfirm) {
            registrationAdmin(email, password, administration);
            navigation.navigate("AdminHome");
            setPasswordconfirm('');
            setEmail('');
            setPassword('');
            setPasswordconfirm('');
        }
    }
  return (
    <View style={styles.container}>


            <View style={styles.viewDirection}>
                <Image style={styles.img} source={require("../assets/1.png")} />
            </View>
            <Text style={styles.textDesign3}>Let's get you signed up {""}</Text>
         
            <TextInput
                style={styles.fieldText_Design}
                placeholder='Admininstration ID'
                value={administration}
                onChangeText={(administration) => setAdminstration(administration)}
            />

            <TextInput
                style={styles.fieldText_Design}
                placeholder='Email'
                value={email}
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput
                style={styles.fieldText_Design}
                placeholder='Password'
                onChangeText={(password) => setPassword(password)}
                secureTextEntry={true}
            />
            <TextInput
                style={styles.fieldText_Design}
                placeholder='Confirm Password'
                onChangeText={(passwordconfirm) => setPasswordconfirm(passwordconfirm)}
                secureTextEntry={true}
            />

            <View style={{ marginTop: 10, color: '#FFFFFF' }}>
                <Pressable onPress={handlePress}  style={styles.loginButton}>
                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Register</Text>
                </Pressable>
            </View >
            <View style={styles.viewDirection1}>
                <Text style={styles.textDesign5}>Registered? </Text>
                <Pressable onPress={() => navigation.navigate("SignIn")}>
                    <Text style={styles.textDesign4}>Sign In {" "}</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default AdminSignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fieldText_Design: {
        backgroundColor: '#F1F0F0',
        width: 250,
        height: 55,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    img: {
        height: 250,
        width: 250,
        borderRadius: 10,
    },
    textDesign3: {
        color: '#000',
        fontSize: 15,
        marginRight: 120,
        marginTop: 20,
        marginBottom: 20,

    },
    viewDirection: {
        flexDirection: 'row',
    },
    viewDirection1: {
        flexDirection: 'row',
        marginLeft:"35%"
    },
   textDesign4: {
        color: '#E46060',
        fontSize: 13,
   marginLeft:0,
        marginTop: 30,
    },
    textDesign5: {
        color: '#808080',
        fontSize: 13,
        marginRight: 5,
        marginTop: 30,
    },
    loginButton: {
        height: 55,
        width: 250,
        color: '#FFFFFF',
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: '#BF4158',
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },

})