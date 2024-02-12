import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";
import { app_firebase } from "./config/firebaseConfig";
import { auth_firebase } from "./config/firebaseConfig";
import { db_fibase } from "./config/firebaseConfig";
import { Firestore } from "firebase/firestore";
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, updateEmail } from "firebase/auth";
const auth = auth_firebase;
const db = db_fibase;

export  async function listDisplay() {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
}

export async function registration(email, password) {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const user = response.user;
        const userRef = doc(db, "users", user.uid)

        await setDoc(userRef, {
            email: user.email,
            uid: user.uid,
        })

       sendEmailVerification(auth.currentUser)
            .then(() => {
                // Email verification sent!
                // ...
            });
        alert('Check your emails!');
    } catch (error) {
        console.log(error);
        alert('Sign up Failed: ' + error.message);
    }
}

export async function registrationAdmin(email, password, adminstration) {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const user = response.user;
        const userRef = doc(db, "users", user.uid)

        await setDoc(userRef, {
           
            email: user.email,
            uid: user.uid,
            adminstration: adminstration,
        })

       sendEmailVerification(auth.currentUser)
            .then(() => {
                // Email verification sent!
                // ...
            });
        alert('Check your emails!');
    } catch (error) {
        console.log(error);
        alert('Sign up Failed: ' + error.message);
    }
}

export async function LoginHome(email, password) {

    try {
        const response = await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const responseUser = userCredential.user
                console.log(responseUser)
            })
            .catch((err) => alert("Login error", err.message));

    } catch (err) {
        alert("There is something wrong!", err.message);
        console.log(err.message);
    }
}

export async function resetPassword(email) {

    sendPasswordResetEmail(auth, email)
        .then(() => {
            // Password reset email sent!
            // ..
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });

}
export async function getUserInfo() {
    let dataObj = []
    const currentUser = firebase.auth().currentUser;
    let doc = await firebase.firestore().collection('users').doc(currentUser?.uid).get();
    let docID = doc.id;

    dataObj.push({ ...doc.data(), ['id']: docID })
    console.log(dataObj);
    return dataObj
}

export async function updateUserDetails(id, firstName, setLastname, phonenumber, idnumber, schoolName, grade) {
    /*console.log('update btn pressed')
    const currentUser = auth.currentUser;
    console.log(id)
    console.log(grade)
    var mydetails = firebase.firestore().collection("users").doc(id);
    
    // Set the "capital" field of the city 'DC'
     return mydetails.update({
         email: email,
         firstName: firstName,
         setLastname: setLastname,
         Phonenumber: phonenumber,
         Idnumber: idnumber,
         SchoolName: schoolName,
         grade: grade,
     })
        .then(() => {
            console.log("User details successfully updated!");
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });*/
    const currentUser = auth.currentUser;
    try {
        const docRef = await addDoc(collection(db, "userDetails"), {
            uid: currentUser.uid,
            firstName: firstName,
            setLastname: setLastname,
            Phonenumber: phonenumber,
            Idnumber: idnumber,
            SchoolName: schoolName,
            grade: grade,
        });

        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    
}

 