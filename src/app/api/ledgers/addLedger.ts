import { collection, addDoc } from "firebase/firestore";
import { db } from "../../db/firebase/firebase";
import { Ledger } from "../../Constants/interfaces";

export async function addLedger(ledger: Omit<Ledger, "id">): Promise<string> {
  try {
    const docRef = await addDoc(collection(db, "ledgers"), ledger);
    console.log("Ledger added with ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding ledger:", error);
    throw error;
  }
}
