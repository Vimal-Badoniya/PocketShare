import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../db/firebase/firebase";
import { Transaction } from "../../Constants/interfaces";
import { LEDGERS_DB } from "@/app/Constants/constants";

export async function addExpense(
  ledgerId: string,
  transaction: Transaction
): Promise<void> {
  try {
    const ledgerRef = doc(db, LEDGERS_DB, ledgerId);
    await updateDoc(ledgerRef, {
      transactions: arrayUnion(transaction),
    });
  } catch (error) {
    console.error("Error adding expense:", error);
    throw error;
  }
}
