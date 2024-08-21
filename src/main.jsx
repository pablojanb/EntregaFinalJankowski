import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC6g-LGwhtmBllwT08eN45YpA--gvFGoYI",
  authDomain: "ecommerce-coder-9fbb1.firebaseapp.com",
  projectId: "ecommerce-coder-9fbb1",
  storageBucket: "ecommerce-coder-9fbb1.appspot.com",
  messagingSenderId: "822686721903",
  appId: "1:822686721903:web:02163eac5fcc4b8d65ea9a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
