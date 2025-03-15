"use client";
import { LEDGER_TYPE_ICON } from "@/app/Constants/constants";
import { RootState } from "@/app/redux/store";
import { useSelector } from "react-redux";
import styles from "./LedgerList.module.css";
import { useRouter } from "next/navigation";

export default function LedgerList() {
  const ledgerList = useSelector((state: RootState) => state?.ledgerList);
  const navigate = useRouter();

  return (
    <div className={styles.cardContainer}>
      {ledgerList?.map((ledger) => {
        return (
          <div
            key={ledger?.id}
            className={styles.cardWrapper}
            onClick={() => {
              navigate.push(`/ledger/${ledger?.id}`);
            }}
          >
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
