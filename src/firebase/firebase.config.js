// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4p7245osj19FmTtb_FXXcN9leq11PXlA",
    authDomain: "a10-chef-recipe.firebaseapp.com",
    projectId: "a10-chef-recipe",
    storageBucket: "a10-chef-recipe.appspot.com",
    messagingSenderId: "180086932123",
    appId: "1:180086932123:web:654db69278189349043c3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;