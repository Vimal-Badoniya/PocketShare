"use client";

import getLedgerList from "@/app/api/ledgers/getLedgerList";
import { useEffect } from "react";

export default function GetLedgerList() {
  useEffect(() => {
    getLedgerList().then((ledgers) => {
      console.log(ledgers);
    });
  }, []);

  return <></>;
}
