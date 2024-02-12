import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { CameraView, Camera } from "expo-camera/next";
import { auth_firebase, realt_firebase } from "../config/firebaseConfig";
import { ref, set } from "firebase/database";
const rdb = realt_firebase;
const auth = auth_firebase;
export default function Scanner() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [approved, setApproved] = useState(1);

    useEffect(() => {
        const getCameraPermissions = async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        };
        
        getCameraPermissions();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
       
        set(ref(rdb, 'authoriz/'), {
            approved: approved,
       
        })
         .then(() => {
            alert('Success', 'User data written successfully');
        })

        setScanned(true);
       
        alert('Scan complete proceed to vending machine');
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <CameraView
                onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
                barcodeScannerSettings={{
                    barCodeTypes: ["qr", "pdf417"],
                    
                }}
                
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && (
                <Button title={"Tap to Scan"} onPress={() => setScanned(false)} />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
    },
});