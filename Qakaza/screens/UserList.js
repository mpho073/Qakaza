import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserList = ({navigation}) => {
  return (
    <View>
      <Text>userList</Text>
    </View>
  )
}

export default UserList

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