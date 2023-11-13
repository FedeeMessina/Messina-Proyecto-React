import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7IMGn9-culavDVZCHYy7sI5Jl9YU36RQ",
  authDomain: "messina-react.firebaseapp.com",
  projectId: "messina-react",
  storageBucket: "messina-react.appspot.com",
  messagingSenderId: "1063348103416",
  appId: "1:1063348103416:web:f6addfbccb2826975c330d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
)
