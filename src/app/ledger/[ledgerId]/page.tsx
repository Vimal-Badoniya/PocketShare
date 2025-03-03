"use client";

import { useParams } from "next/navigation";

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/db/firebase/firebase";
import { Ledger } from "@/app/Constants/interfaces";
import AddNewExpense from "@/app/Components/AddNewExpense/AddNewExpense";

const LedgerPage = () => {
  const params = useParams();

  const { ledgerId } = params;
  const [ledger, setLedger] = useState<Ledger | null>(null);

  useEffect(() => {
    const fetchLedger = async () => {
      if (ledgerId) {
        const docRef = doc(db, "ledgers", ledgerId as string);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setLedger({ id: docSnap.id, ...docSnap.data() } as Ledger);
        } else {
          console.log("No such document!");
        }
      }
    };
    fetchLedger();
  }, [ledgerId]);

  if (!ledger) {
    return (
      <div>
        Loading...
        <button>Add New Expense</button>
      </div>
    );
  }

  console.log(ledger);

  return (
    <div>
      <h1>{ledger.name}</h1>
      <p>{ledger.description}</p>
      <h2>Participants</h2>
      <ul>
        {ledger.participants?.map((participant) => (
          <li key={participant.id}>{participant.name}</li>
        ))}
      </ul>
      <h2>Transactions</h2>
      <ul>
        {ledger.transactions?.map((transaction) => (
          <li key={transaction?.id}>{transaction?.description}</li>
        ))}
      </ul>
      <AddNewExpense />
    </div>
  );
};

export default LedgerPage;
