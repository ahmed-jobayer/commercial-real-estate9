// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCDANvXBE1Wi33Z3-5RfI9VjQh6H6agVvw',
  authDomain: 'assignment-9-commercial-real-e.firebaseapp.com',
  projectId: 'assignment-9-commercial-real-e',
  storageBucket: 'assignment-9-commercial-real-e.appspot.com',
  messagingSenderId: '998538247036',
  appId: '1:998538247036:web:a697a6ca6a1663c93a42f9',
  // apiKey: import.meta.env.VITE_APIKEY,
  // authDomain: import.meta.env.VITE_AUTHDOMAIN,
  // projectId: import.meta.env.VITE_PROJECTID,
  // storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  // appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app