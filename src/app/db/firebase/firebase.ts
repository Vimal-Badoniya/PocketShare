import { initializeApp, getApps } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase only if no apps have been initialized yet
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export const db = getFirestore();

export async function testFirestore() {
  try {
    const snapshot = await getDocs(collection(db, "users"));
    console.log(
      "Firestore connectivity test successful. Number of documents:",
      snapshot
    );
  } catch (error) {
    console.error("Error connecting to Firestore:", error);
  }
}
