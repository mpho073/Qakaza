import { StyleSheet, Text, View, TextInput, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getUserInfo } from '../service';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { getAuth, signOut } from 'firebase/auth';
import { Entypo } from '@expo/vector-icons';
import { auth_firebase, db_fibase } from '../config/firebaseConfig';

auth = auth_firebase;
db = db_fibase;

const AdminHome = ({navigation}) => {
    const [fullname, setFullname] = useState('');


    const handlePressProfile = () => {
        navigation.navigate('ProfileUser');
    }
    const handlePressHome = () => {
        navigation.navigate('Home');
    }

    const handlePressScanner = () => {
        navigation.navigate('UserLists');
    }
    const handlePressTransaction = () => {
        navigation.navigate('');
    }
    const handlePressTransactionTester = () => {
        navigation.navigate('');

    }
    const handlePressLogOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            navigation.navigate('SignIn')
        }).catch((error) => {
            // An error happened.
        });
    };

    let list = []
    const fetchUser = async => {
        /*getUserInfo().then((data) => {
            list = data
            setFullname("");
        })*/
    }

    const moment = require('moment');
    let now = moment();
    const today = now.format("dddd, MMMM Do YYYY");

    useEffect(() => {
        fetchUser()
    }, [])
  return (
    <View style={styles.container}>
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(191,65,56)', width: "100%"}}>
                <Text style={styles.lgBtn2}>{today}</Text>
            </View>

            <View style={styles.viewDirection}>
                <Image style={styles.img} source={require("../assets/1.png")} />
            </View>
            <View style={{ marginBottom: 10, marginLeft:10 }}>
                <Text style={styles.textDesign3}>Welcome Back</Text>
                <TouchableOpacity onPress={handlePressScanner} style={styles.option1}>
                <Entypo name="list" size={34} color="black" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.option3} onPress={handlePressProfile}>
                    <FontAwesome name="user" size={34} color="black" />              
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.option5} onPress={handlePressTransactionTester}>
                    <FontAwesome name="history" size={34} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.option4} onPress={handlePressLogOut}>
                    <Entypo name="log-out" size={34} color="black" />
                </TouchableOpacity>
            </View>

        </View>
  )
}

export default AdminHome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textDesign3: {
        color: '#000',
        fontSize: 15,
        marginRight: "50%",
        marginBottom: 5,

    },
    viewDirection: {
        flexDirection: 'row',
    },
    MainContainer: {

        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#FFFFFF',
        width: 280,
        height: 150,
        borderRadius: 280 / 2,
    },
    img: {
        height: 250,
        width: 250,
        marginBottom: 0,
        borderRadius: 10,

    },
    lgBtn: {
        height: 40,
        width: 120,
        color: '#000000',
        fontWeight: 'bold',
        backgroundColor: '#D3D3D3',
        borderRadius: 15,
        alignItems: 'center',
        textAlignVertical: "center",
        textAlign: 'center',
        //marginTop: 20,
        // paddingHorizontal: 10,
        // paddingVertical: 10,
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        margin: 10

    },
    lgBtn1: {
        height: 150,
        width: 300,
        color: '#FFC0CB',
        fontWeight: 'bold',
        backgroundColor: 'yellow',
        borderColor: '#000',
        //borderColor: '#FFFFFF',
        textAlign: 'center',
        textAlignVertical: "center",
        borderWidth: 2,
        marginBottom: 0,
        paddingHorizontal: 40,
        paddingVertical: 10,
        justifyContent: 'center',
        alignContent: 'center',
        fontSize: 20,

        marginLeft: 15,
        // marginBottom: 100


    },
    option1: {

        height: 80,
        width: 300,
        backgroundColor: 'yellow',
        borderColor: '#fff',
        borderWidth: 2,
        paddingHorizontal: "39%",
        paddingVertical:"2%",
        justifyContent: 'center',
        marginLeft: 15,
        borderRadius: 20,

    },
    option2: {

        height: 80,
        width: 300,
        backgroundColor: 'blue',
        borderColor: '#fff',
        paddingHorizontal: "39%",
        paddingVertical:"2%",
        justifyContent: 'center',
        marginLeft: 15,
        borderRadius: 20,
        marginTop:10,
    },
    option3: {

        height: 80,
        width: 300,
        backgroundColor: '#33FFE3',
        borderColor: '#fff',
        paddingHorizontal: "39%",
        paddingVertical:"2%",
        justifyContent: 'center',
        marginLeft: 15,
        marginTop:10,
        borderRadius: 20,
    },
    option4: {

        height: 80,
        width: 300,
        backgroundColor: '#8B45F8',
        borderColor: '#fff',
        paddingHorizontal: "39%",
        paddingVertical:"2%",
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 10,
        marginLeft: 15,
        paddingRight:50,
    },
    option5: {

        height: 80,
        width: 300,
        backgroundColor: '#C6D3B2',
        borderColor: '#fff',
        paddingHorizontal: "39%",
        paddingVertical:"2%",
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 20,
        marginLeft: 15,
    },
    lgBtn2: {

        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: "center",
        marginTop: 20,
        paddingHorizontal: 100,
        paddingVertical: 10,
        justifyContent: 'center',
        alignContent: 'center',
        fontSize: 15,

    },
    input: {
        margin: 5,
        height: 40,
        width: 300,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,

    },
    TxtWeight: {

        fontSize: 30,
        paddingBottom: 50,
        color: '#db00b6',
        alignItems: 'center',
        textAlign: 'center',
        fontFamily: 'Helvetica',


    },
    image: {

        justifyContent: "center",
        backgroundColor: 'rgba(0,0,0,.6)'
    },
    Design: {
        color: '#FFFFFF',
        fontSize: 12,
        marginRight: 5,
        marginTop: 51,
        fontFamily: 'Helvetica',
        textAlign: 'center',
        justifyContent: 'center',
        letterSpacing: 1,

    },
    Design1: {
        color: '#db00b6',
        fontSize: 15,
        fontFamily: 'arial',
        marginRight: 5,
        marginTop: 50,
        textAlign: 'center',
        justifyContent: 'center',

    },
    a: {

        //background:' rgba(191,65,88)',
        //'linear-gradient:(333deg,(rgba(191,65,88,1)54%,  rgba(232,148,168,1)86%,rgba(246,215,213,1)100%))',
        borderRadius: 20,
        width: 400,
        height: 300, justifyContent: 'center',
        alignItems: 'center',
        //background: `linear-gradient( rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))`,
    },
})