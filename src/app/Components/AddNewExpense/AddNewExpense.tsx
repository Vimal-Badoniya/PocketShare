import { useState } from "react";
import NewExpenseModal from "./NewExpenseModal/NewExpenseModal";
export default function AddNewExpense() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function AddNewExpenseButtonHandler() {
    setIsModalOpen(true);
  }

  return (
    <>
      <div>
        <button onClick={AddNewExpenseButtonHandler}>Add New Expense</button>
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
