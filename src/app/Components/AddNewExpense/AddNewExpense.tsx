import { useState } from "react";
import NewExpenseModal from "./NewExpenseModal/NewExpenseModal";
import styles from "./AddNewExpense.module.css";
import Messages from "@/app/Constants/messages";

export default function AddNewExpense() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function AddNewExpenseButtonHandler() {
    setIsModalOpen(true);
  }

  return (
    <>
      <div>
        <button
          onClick={AddNewExpenseButtonHandler}
          className={styles.expenseBtn}
        >
          {Messages.addNewExpense}
        </button>
      </div>
      {isModalOpen && (
        <NewExpenseModal
          onModalClose={() => {
            setIsModalOpen(false);
          }}
        />
      )}
    </>
  );
}
