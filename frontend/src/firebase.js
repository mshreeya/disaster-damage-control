import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDOVa8bEvx7Vesdu-IAqJlxHbJ9rF11JGY",
    authDomain: "disaster-damage-control.firebaseapp.com",
    projectId: "disaster-damage-control",
    storageBucket: "disaster-damage-control.appspot.com",
    messagingSenderId: "244985920278",
    appId: "1:244985920278:web:94562c51fe843da1e7ae37"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export default app;