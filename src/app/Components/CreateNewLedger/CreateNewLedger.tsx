"use client";

import { useState } from "react";
import { LEDGER_TYPE } from "@/app/Constants/constants";
import Messages from "@/app/Constants/messages";
import styles from "./CreateNewLedger.module.css";
import NewLedgerModal from "./NewLedgerModal/NewLedgerModal";
import { useDispatch } from "react-redux";
import { addNewLedgerField } from "@/app/redux/slices/newLedgerSlice";

export default function CreateNewLedger() {
  const [isOpen, setisOpen] = useState(false);
  const dispatch = useDispatch();

  function CreateNewLedgerHandler() {
    console.log("Button clicked");
    setisOpen(true);
  }

  function handleModalClose() {
    setisOpen(false);
  }

  return (
    <>
      <div className={styles.labelAndDropdownWrapper}>
        <div>{Messages.createNewExpensePlanFor}</div>
        <div>
          <select
            defaultValue={LEDGER_TYPE[0].value}
            onChange={(e) => {
              dispatch(
                addNewLedgerField({
                  fieldType: "ledgerType",
                  value: e.target.value,
                })
              );
            }}
          >
            {LEDGER_TYPE.map((ledgerType) => (
              <option key={ledgerType.id} value={ledgerType.value}>
                {ledgerType.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button onClick={CreateNewLedgerHandler}>Create</button>

      {isOpen && <NewLedgerModal onModalClose={handleModalClose} />}
    </>
  );
}
