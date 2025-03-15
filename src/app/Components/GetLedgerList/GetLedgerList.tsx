"use client";

import getLedgerList from "@/app/api/ledgers/getLedgerList";
import { setLedgerList } from "@/app/redux/slices/ledgerListSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function GetLedgerList() {
  const dispatch = useDispatch();

  useEffect(() => {
    getLedgerList().then((ledgers) => {
      dispatch(setLedgerList(ledgers));
    });
  }, [dispatch]);

  return <></>;
}
