import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../db/firebase/firebase";
import { Transaction } from "../../Constants/interfaces";

export async function addExpense(
  ledgerId: string,
  transaction: Transaction
): Promise<void> {
  try {
    const ledgerRef = doc(db, "ledgers", ledgerId);
    await updateDoc(ledgerRef, {
      transactions: arrayUnion(transaction),
    });
    console.log("Expense added to ledger with ID:", ledgerId);
  } catch (error) {
    console.error("Error adding expense:", error);
    throw error;
  }
}
