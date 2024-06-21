import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCqj-eLgYln_7l_sgXoyhCX0a-jJMy_Zb0",
  authDomain: "mentor-mentee-9d67b.firebaseapp.com",
  projectId: "mentor-mentee-9d67b",
  storageBucket: "mentor-mentee-9d67b.appspot.com",
  messagingSenderId: "882711981265",
  appId: "1:882711981265:web:2fa41147c3d5b97b8da9f0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
