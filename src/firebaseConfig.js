import firebase from "firebase/app";
import "firebase/auth"
import { config } from "@/.env";

firebase.initializeApp(config);

//OAuth Config
const provider = new firebase.auth.GoogleAuthProvider();


export {
  provider
}