import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIn-Fm3Hiid5wn_MVHO5x3Og6erCaFfLA",
  authDomain: "jullie-6e477.firebaseapp.com",
  projectId: "jullie-6e477",
  storageBucket: "jullie-6e477.appspot.com",
  messagingSenderId: "859271922154",
  appId: "1:859271922154:web:700d13889dc06db99e3293",
  measurementId: "G-QQS8W9NEYF",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function getTasks(db) {
  const tasksCol = collection(db, "tasks");
  const tasksSnapshot = getDocs(tasksCol);
  const tasksList = tasksSnapshot.docs.map((doc) => doc.data());
  return tasksList;
}
console.log(getTasks(db));
