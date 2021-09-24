import firebase from 'firebase/app'
import'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCvkeZTP_hRD3UZRO3fhsqUOlHNxKb8qaA",
    authDomain: "visca-e4274.firebaseapp.com",
    projectId: "visca-e4274",
    storageBucket: "visca-e4274.appspot.com",
    messagingSenderId: "34670035302",
    appId: "1:34670035302:web:c7691cac3e9ac04bd348a7"
  };
  
  // Initialize Firebase
 
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export function getFirestore(){
    return firebase.firestore()

}
