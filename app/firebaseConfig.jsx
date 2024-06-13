// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCr4QrnB6UVhaUXmfuS3hOl4FVxMt2YqD0",
    authDomain: "harun-portfolio-app.firebaseapp.com",
    projectId: "harun-portfolio-app",
    storageBucket: "harun-portfolio-app.appspot.com",
    messagingSenderId: "656360957330",
    appId: "1:656360957330:web:908426a5b0aed39cbb4d4b",
    measurementId: "G-5EMYDMKNYT"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
