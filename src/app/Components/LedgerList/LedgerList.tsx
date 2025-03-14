"use client";
import { LEDGER_TYPE_ICON } from "@/app/Constants/constants";
import { RootState } from "@/app/redux/store";
import { useSelector } from "react-redux";
import styles from "./LedgerList.module.css";

export default function LedgerList() {
  const ledgerList = useSelector((state: RootState) => state?.ledgerList);

  return (
    <div className={styles.cardContainer}>
      {ledgerList?.map((ledger) => {
        return (
          <div key={ledger?.id} className={styles.cardWrapper}>
            <div className={styles.icon}>
              {
                LEDGER_TYPE_ICON[
                  ledger.ledgerType as keyof typeof LEDGER_TYPE_ICON
                ]
              }
            </div>
            <div className={styles.ledgerText}>{ledger?.name}</div>
          </div>
        );
      })}
    </div>
  );
}
