"use client";

import getLedgerList from "@/app/api/ledgers/getLedgerList";
import { setLedgerList } from "@/app/redux/slices/ledgerListSlice";
import { RootState } from "@/app/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function GetLedgerList() {
  const dispatch = useDispatch();

  const list = useSelector((state: RootState) => state?.ledgerList);
  console.log(list);

  useEffect(() => {
    getLedgerList().then((ledgers) => {
      dispatch(setLedgerList(ledgers));
    });
  }, [dispatch]);

  return <></>;
}
