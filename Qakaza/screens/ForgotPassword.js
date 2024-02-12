import { StyleSheet, Text, View, TextInput, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { resetPassword } from '../service'

const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState('')

    const reset = () => {
        resetPassword(email)
        navigation.navigate("SignIn")
    }
    return (
        <View style={styles.container}>

            <View style={styles.viewDirection}>
                <Image style={styles.img} source={require("../assets/1.png")} />
            </View>
            <Text style={styles.textDesign3}>Forgot password { }</Text>
            <TextInput
                style={styles.fieldText_Design}
                placeholder='Enter your email address'
                value={email}
                onChangeText={(email) => setEmail(email)}
            />
            <Pressable onPress={reset} style={styles.loginButton}>
                <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Submit</Text>
            </Pressable>
            <View style={styles.viewDirection1}>
                <Text style={styles.textDesign5}>Registered? {""}</Text>
                <Pressable onPress={() => navigation.navigate("SignIn")}>
                    <Text style={styles.textDesign4}>Sign In {""}</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default ForgotPassword

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
    img: {
        height: 250,
        width: 250,
        marginBottom: 50,
        borderRadius: 10,
        marginTop: 50,
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
        marginTop: 20,
    },
    textDesign5: {
        color: '#808080',
        fontSize: 13,
        marginTop: 20,
    },
})