import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth_firebase, db_fibase } from '../config/firebaseConfig';
import { getAuth } from 'firebase/auth';
import { collection, getDocs } from "firebase/firestore";
import { TextInput } from 'react-native-gesture-handler';

auth = auth_firebase;
db = db_fibase;

const UserLists = ({ navigation }) => {
    const [dataList, setDataList] = useState([]);
    const [filteredDataList, setFilteredDataList] = useState([]);
    const [filterValue, setFilterValue] = useState('');
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const dataList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setDataList(dataList);
        setFilteredDataList(dataList); // Initially set filtered data same as all data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    const handleFilter = (startChar) => {
      const filteredData = dataList.filter(data => data.name.toLowerCase().startsWith(startChar.toLowerCase()));
      setFilteredDataList(filteredData);
      setFilterValue(startChar);
    };
  
    const exportToFile = () => {
      const dataToExport = JSON.stringify(filteredDataList, null, 2);
      // Export logic here
    };
        return (
            <View style={styles.container}>
            <Text style={styles.title}>Data List</Text>
            <View style={styles.filterContainer}>
              <Text>Filter Users by Name Starting With:</Text>
              <TextInput
                style={styles.input}
                value={filterValue}
                onChangeText={(text) => handleFilter(text)}
              />
            </View>
            <View>
              {filteredDataList.map(data => (
                <Text key={data.id} style={styles.user}>
                  <Text style={styles.userName}>{data.name}</Text> - <Text style={styles.userEmail}>{data.email}</Text>
                </Text>
              ))}
            </View>
            <Pressable title="Export Data to File" onPress={exportToFile} />
          </View>
        )
    }

    export default UserLists

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          maxWidth: 600,
          marginHorizontal: 'auto',
          padding: 20,
        },
        title: {
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 20,
        },
        filterContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20,
        },
        input: {
          flex: 1,
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 5,
          padding: 10,
          marginLeft: 10,
        },
        user: {
          marginBottom: 10,
        },
        userName: {
          fontWeight: 'bold',
        },
        userEmail: {
          fontStyle: 'italic',
        },
      });