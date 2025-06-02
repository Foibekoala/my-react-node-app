import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Only Firestore

const firebaseConfig = {
  apiKey: "AIzaSyAD53Xymj-ra77rCp76ru1JT-Mwc83OVuE",
  authDomain: "nexus-e9706.firebaseapp.com",
  projectId: "nexus-e9706",
  storageBucket: "nexus-e9706.appspot.com",
  messagingSenderId: "1092973882279",
  appId: "1:1092973882279:web:e6806e7df1848f65052482",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }; // Only export Firestore