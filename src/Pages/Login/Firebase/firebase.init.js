import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const InitializeFireBase = () =>{
     initializeApp(firebaseConfig);
}

export default InitializeFireBase;