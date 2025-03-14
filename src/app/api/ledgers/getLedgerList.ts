import { LEDGERS_DB } from "@/app/Constants/constants";
import { Ledger } from "@/app/Constants/interfaces";
import { db } from "@/app/db/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export default async function getLedgerList() {
  try {
    const ledgerListRef = await getDocs(collection(db, LEDGERS_DB));
    const ledgerList: Ledger[] = ledgerListRef.docs.map((doc) => ({
      ...doc.data(),
      id: doc?.id,
    })) as Ledger[];
    return ledgerList;
  } catch (error) {
    console.error(error);
  }
}
