import firebase from "firebase/app";
import "firebase/auth"
import { config } from "@/.env";

firebase.initializeApp(config);

//OAuth Config
let provider = new firebase.auth.OAuthProvider('google.com');
provider.addScope('profile');
provider.addScope('email');
// provider.addScope('openid');
// provider.addScope('https://www.googleapis.com/auth/plus.me');
// provider.addScope('https://www.googleapis.com/auth/userinfo.email');
// provider.addScope('https://www.googleapis.com/auth/plus.login');
// provider.addScope('https://www.googleapis.com/auth/userinfo.profile');

export {
  provider
}