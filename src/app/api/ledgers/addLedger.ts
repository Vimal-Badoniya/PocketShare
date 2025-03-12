import {
  collection,
  addDoc,
  updateDoc,
  doc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "../../db/firebase/firebase";
import { Ledger } from "../../Constants/interfaces";
import { LEDGERS_DB, USERS_DB } from "@/app/Constants/constants";

export async function addLedger(ledger: Omit<Ledger, "id">): Promise<string> {
  try {
    const docRef = await addDoc(collection(db, LEDGERS_DB), ledger);
    const userDocRef = doc(db, USERS_DB, ledger.createdBy);
    await updateDoc(userDocRef, {
      createdLedgers: arrayUnion(docRef.id),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding ledger:", error);
    throw error;
  }
}
