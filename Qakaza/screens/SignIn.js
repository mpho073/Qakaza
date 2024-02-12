import { StyleSheet, Text, View, TextInput, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { LoginHome } from '../service';

const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('eye');

    const handlePress = () => {
        if (!email) {
            alert('Email field is required*.');
        }

        if (!password) {
            alert('Password field is required*.');
        }

        LoginHome(email, password).then(() => {
            navigation.navigate('Home');
            setEmail('');
            setPassword('');
        });

    };

    const handlePasswordVisibility = () => {
        if (rightIcon === 'eye') {
            setRightIcon('eye-off');
            setPasswordVisibility(!passwordVisibility);
        } else if (rightIcon === 'eye-off') {
            setRightIcon('eye');
            setPasswordVisibility(!passwordVisibility);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.viewDirection}>
                <Image style={styles.img} source={require("../assets/1.png")} />
            </View>
            <Text style={styles.textDesign3}>Let's get started {" "}</Text>
            <TextInput
                style={styles.fieldText_Design}
                placeholder='Email'
                value={email}
                onChangeText={(email) => setEmail(email)} />

            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.fieldText_Design}
                placeholder='Password' value={password}
                onChangeText={(password) => setPassword(password)}
                secureTextEntry={passwordVisibility}
            />

            <View style={{ marginTop: 10 }}>
                <Pressable onPress={handlePress} style={styles.loginButton}>
                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Login</Text>
                </Pressable>
            </View >

            <View style={{ marginTop: 10, paddingLeft: 100 }}>
                <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
                    <Text>Forgot Password? {" "}</Text>
                </Pressable>
            </View >
            <View style={styles.viewDirection1}>
                <Text style={styles.textDesign5}>No Account?</Text>
                <Pressable onPress={() => navigation.navigate("Signup")}>
                    <Text style={styles.textDesign4}>Sign Up{" "}</Text>
                </Pressable>
            </View>

            <View style={styles.viewDirection2}>
                
            </View>

            <View style={styles.viewDirection3}>
                <Text style={{ fontWeight: "bolds", fontSize:25}}>Administrator</Text>
            </View>
            <View style={{borderBottomWidth:1, borderColor:"#000", width: "80%", height:20}}>

            </View>

           
            <View style={styles.viewDirection1}>
                <Text style={styles.textDesign5}>Registeres?</Text>
                <Pressable onPress={() => navigation.navigate("AdminSignIn")}>
                    <Text style={styles.textDesign4}>Sign In{" "}</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default SignIn

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
    textDesign3: {
        color: '#000',
        fontSize: 15,
        marginRight: 147,
        marginTop: 20,
        marginBottom: 20,

    },
    viewDirection: {
        flexDirection: 'row',
    },
    viewDirection1: {
        flexDirection: 'row',
        marginLeft: "35%"
    },
    viewDirection2: {
        marginLeft: "0%",
        marginTop: 10,
    },
    viewDirection2: {
        marginLeft: "0%",
        marginTop: 10,
    },
    viewDirection3: {
        marginLeft: "0%",
         
    },
    img: {
        height: 250,
        width: 250,
        borderRadius: 10,
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
    textDesign4: {
        color: '#E46060',
        fontSize: 13,
        marginRight: 5,
        marginTop: 20,
    },
    textDesign5: {
        color: '#808080',
        fontSize: 13,
        marginRight: 5,
        marginTop: 20,
    },

})