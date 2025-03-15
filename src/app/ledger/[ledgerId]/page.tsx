"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Ledger } from "@/app/Constants/interfaces";
import AddNewExpense from "@/app/Components/AddNewExpense/AddNewExpense";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

const LedgerPage = () => {
  const { ledgerId } = useParams();
  const [ledger, setLedger] = useState<Ledger | null>(null);

  const allLedgers = useSelector((state: RootState) => state?.ledgerList);

  useEffect(() => {
    const selectedLedger = allLedgers?.find((ledger) => ledger.id === ledgerId);
    if (selectedLedger) setLedger(selectedLedger);
  }, [allLedgers, ledgerId]);

  if (!ledger) {
    return (
      <div>
        Loading...
        <button>Add New Expense</button>
      </div>
    );
  }

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
