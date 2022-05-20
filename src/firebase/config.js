import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyA3RtObJk95B424mmgQZ7pP7sLtJdKtFuI",
    authDomain: "todo-5d0b5.firebaseapp.com",
    projectId: "todo-5d0b5",
    storageBucket: "todo-5d0b5.appspot.com",
    messagingSenderId: "583975122276",
    appId: "1:583975122276:web:b5f63428c64cc3bae83671"
};

// init firebase
initializeApp(firebaseConfig)

// init firestore
const db = getFirestore()

// init firebase auth
const auth = getAuth()

export { db, auth }