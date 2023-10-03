// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: 'lamablog-51441.firebaseapp.com',
  projectId: 'lamablog-51441',
  storageBucket: 'lamablog-51441.appspot.com',
  messagingSenderId: '1004739202643',
  appId: '1:1004739202643:web:35f4a99db17381c4a380a6',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
