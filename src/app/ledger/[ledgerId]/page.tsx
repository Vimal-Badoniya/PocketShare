"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Ledger } from "@/app/Constants/interfaces";
import AddNewExpense from "@/app/Components/AddNewExpense/AddNewExpense";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import styles from "./page.module.css";
import {
  LEDGER_TAB_OPTIONS,
  LEDGER_TYPE_ICON,
} from "@/app/Constants/constants";
import Messages from "@/app/Constants/messages";
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";

const LedgerPage = () => {
  const { ledgerId } = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const [ledger, setLedger] = useState<Ledger | null>(null);

  const allLedgers = useSelector((state: RootState) => state?.ledgerList);

  useEffect(() => {
    const selectedLedger = allLedgers?.find((ledger) => ledger.id === ledgerId);
    if (selectedLedger) setLedger(selectedLedger);
  }, [allLedgers, ledgerId]);

  const totalExpense = useMemo(() => {
    let total = 0;
    ledger?.transactions?.forEach((trans) => {
      total += trans?.amount;
    });
    return total;
  }, [ledger]);

  if (!ledger) {
    return (
      <div>
        {Messages.loading}
        <AddNewExpense />
      </div>
    );
  }

  console.log(ledger);

  const formatDate = (dateString = "") => {
    if (!dateString)
      return {
        formattedDate: "",
        formattedMonth: "",
      };
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
    });
    const formattedDateArr = formattedDate?.split(" ");
    return {
      formattedDate: formattedDateArr[0],
      formattedMonth: formattedDateArr[1],
    };
  };

  return (
    <div>
      <div className={styles.headerBg}></div>

      <div className={styles.iconContainer}>
        <div className={styles.icon}>
          {
            LEDGER_TYPE_ICON[
              ledger?.ledgerType as keyof typeof LEDGER_TYPE_ICON
            ]
          }
        </div>
      </div>

      <div className={styles.ledgerNameAndTotalContainer}>
        <div className={styles.ledgerName}>{ledger?.name}</div>
        <div className={styles.totalExpense}>
          {Messages.totalExpense} : {totalExpense}
        </div>
      </div>

      <div className={styles.tabsWrapper}>
        {LEDGER_TAB_OPTIONS?.map((tab) => (
          <div
            key={tab?.id}
            className={styles.tab}
            onClick={() => {
              router.push(`${pathname}/charts`);
            }}
          >
            {tab?.label}
          </div>
        ))}
      </div>

      <div className={styles.expensesContainer}>
        <h2>Expenses</h2>
        <div>
          {ledger.transactions?.map((transaction) => (
            <div key={transaction?.id} className={styles.expenseWrapper}>
              <div className={styles.dateContainer}>
                <div>
                  {formatDate(transaction?.transactionDate)?.formattedMonth}
                </div>
                <div>
                  {formatDate(transaction?.transactionDate)?.formattedDate}
                </div>
              </div>

              <div className={styles.transactionIcon}>
                {
                  LEDGER_TYPE_ICON[
                    ledger?.ledgerType as keyof typeof LEDGER_TYPE_ICON
                  ]
                }
              </div>

              <div>
                <div className={styles.descriptionText}>
                  {transaction?.description}
                </div>
                <div>{`${transaction?.paidBy} Paid ${transaction?.amount}`}</div>
              </div>

              <div className={styles.getAndPayStatus}>
                <div>Get</div>
                <div>100</div>
              </div>

              <div className={styles.actionButtonWrapper}>
                <div className={styles.editButonWrapper}>
                  <div>
                    <TbEdit />
                  </div>
                  <div>Edit</div>
                </div>

                <div className={styles.deleteButonWrapper}>
                  <div>
                    <MdDelete />
                  </div>
                  <div>Delete</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AddNewExpense />
    </div>
  );
};

export default LedgerPage;
