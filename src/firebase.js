import { initializeApp } from "firebase/app";

const API_KEY = process.env.REACT_APP_FIREBASECONFIG_APIKEY;
const AUTH_DOMAIN = process.env.REACT_APP_FIREBASECONFIG_AUTHDOMAIN;
const PROJECT_ID = process.env.REACT_APP_FIREBASECONFIG_PROJECTID;
const STORAGE_BUCKET = process.env.REACT_APP_FIREBASECONFIG_STORAGEBUCKET;
const MESSAGING_SENDER_ID = process.env.REACT_APP_FIREBASECONFIG_MESSAGINGSENDERID;
const APP_ID = process.env.REACT_APP_FIREBASECONFIG_APPID;
const MEASUREMENT_ID = process.env.REACT_APP_FIREBASECONFIG_MEASUREMENTID;
const DATABASE_URL = process.env.REACT_APP_FIREBASECONFIG_DATABASEURL;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
  databaseURL: DATABASE_URL,
}

export const app = initializeApp(firebaseConfig);
