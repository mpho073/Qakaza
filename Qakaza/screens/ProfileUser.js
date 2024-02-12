import { StyleSheet, Text, View, TextInput, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { updateUserDetails } from '../service';
import { sendEmailVerification, updateEmail } from 'firebase/auth';
import { auth_firebase } from '../config/firebaseConfig';
import { Ionicons } from '@expo/vector-icons';
auth = auth_firebase;

const ProfileUser = ({ navigation }) => {
    const [firstName, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [OTPnumber, setOTPnumber] = useState('');
    const [idnumber, setIdnumber] = useState('');
    const [schoolName, setSchoolName] = useState('');
    const [grade, setGrade] = useState('');
    const [id, setId] = useState('');

    const [userDetails, setUserDetails] = useState([]);

    const handleUpdateEmail = async () => {
        try {
            await updateEmail(auth.currentUser, email);
            alert('Success', 'Email updated successfully');
        } catch (error) {
            alert('Error', 'An error occurred while updating email');
            console.error('Error updating email:', error);
        }
    };

    let list = []

    const fetchUser = async => {
        getUserInfo().then((data) => {
            list = data
            console.log(list);
            setUserDetails(list);
            setPhonenumber(list[0].Phonenumber);
            setFirstname(list[0].lastname);
            setLastname(list[0].firstName);
            setEmail(list[0].email);
            setIdnumber(list[0].Idnumber);
            setSchoolName(list[0].SchoolName);
            setGrade(list[0].grade);
            setId(list[0].id);
        })
    }
    console.log(lastname)

    const [scannerDetails, setScannerDetails] = useState([]);

    let listScanned = []

    const fetchScanner = async => {
        /* getScannerInfo().then((data) => {
             listScanned = data
             console.log(list);
             setScannerDetails(list);
         })*/
    }
    useEffect(() => {
        // fetchUser()
        //  fetchScanner()
    }, [])

    const handlePressUpdate = (id, firstName, setLastname, phonenumber, idnumber, schoolName, grade) => {
        updateUserDetails(id, firstName, setLastname, phonenumber, idnumber, schoolName, grade);
        navigation.navigate('Home');
    };


    return (
        <View style={styles.container}>
            <Pressable style={{ marginRight: "80%",height:50, width:"100", backgroundColor:"#fff" }} onPress={() => navigation.navigate("Home")}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </Pressable>
            <View style={styles.viewDirection}>
                <Image style={styles.img} source={require("../assets/1.png")} />
            </View>
            <Text style={styles.textDesign3}>Complete Form</Text>
            <View style={styles.usernameCenter}>
                <TextInput
                    style={styles.fieldText_Design}
                    placeholder='Email'
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                />

                <View style={{ marginTop: 10 }}>
                    <TouchableOpacity onPress={handleUpdateEmail} style={styles.loginButton}>
                        <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Update Email</Text>
                    </TouchableOpacity>
                </View >

                <TextInput
                    style={styles.fieldText_Design}
                    placeholder='Name'
                    value={firstName}
                    onChangeText={(firstName) => setFirstname(firstName)}
                />
                <TextInput
                    style={styles.fieldText_Design}
                    placeholder='Surname'
                    value={lastname}
                    onChangeText={(lastname) => setLastname(lastname)}
                />

                <TextInput
                    style={styles.fieldText_Design}
                    placeholder='Phone numbers'
                    value={phonenumber}
                    editable
                    onChangeText={(phonenumber) => setPhonenumber(phonenumber)}
                />
                <TextInput
                    style={styles.fieldText_Design}
                    placeholder='ID Number'
                    value={idnumber}
                    editable
                    onChangeText={(idnumber) => setIdnumber(idnumber)}
                />
                <TextInput
                    style={styles.fieldText_Design}
                    placeholder='Name of the School'
                    value={schoolName}
                    editable
                    onChangeText={(schoolName) => setSchoolName(schoolName)}
                />
                <TextInput
                    style={styles.fieldText_Design}
                    placeholder='Grade'
                    value={grade}
                    editable
                    onChangeText={(grade) => setGrade(grade)}
                />
                <View style={{ marginTop: 10 }}>
                    <TouchableOpacity onPress={() => handlePressUpdate(id, firstName, lastname, phonenumber, idnumber, schoolName, grade)} style={styles.loginButton}>
                        <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Update Details</Text>
                    </TouchableOpacity>
                </View >
                
            </View>


        </View>
    )
}

export default ProfileUser

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    imgBackground: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },

    fieldText_Design: {
        backgroundColor: '#F1F0F0',
        width: 250,
        height: 40,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    fieldText_Design2: {
        backgroundColor: '#F1F0F0',
        width: 150,
        height: 40,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 0,

    },
    loginButton: {
        height: 40,
        width: 250,
        color: '#FFFFFF',
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: '#BF4158',
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginButton2: {
        height: 40,
        width: 90,
        color: '#FFC0CB',
        paddingHorizontal: 25,
        paddingVertical: 10,
        backgroundColor: '#808080',
        borderRadius: 10,
        marginRight: 5,
    },
    textDesign: {
        color: '#000',
        marginBottom: 60,
        fontSize: 30,
        // fontFamily: 'brush-script mt',
    },
    textDesign3: {
        color: '#000',
        fontSize: 15,
        // fontFamily: 'brush-script mt',
        marginRight: 135,
        marginTop: 20,
    },
    textDesign4: {
        color: '#000',
        fontSize: 15,
        // fontFamily: 'brush-script mt',
        marginRight: 5,
        marginTop: 20,
    },
    textDesign5: {
        color: '#808080',
        fontSize: 15,
        // fontFamily: 'brush-script mt',
        marginRight: 5,
        marginTop: 20,
    },
    viewDirection: {
        flexDirection: 'row',
        // marginTop:100,
    },
    img: {
        height: 150,
        width: 150,
    },

})