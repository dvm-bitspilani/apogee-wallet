import firebase from "firebase/app";
import * as db from "firebase/database";
import { config } from "@/../.env";

firebase.initializeApp(config);

export default db;
