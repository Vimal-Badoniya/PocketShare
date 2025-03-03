import { useState } from "react";
import Modal from "../common/Modal/Modal";
import {
  FOOD,
  OTHERS,
  RENT,
  TRAVEL,
  UTILITIES,
} from "@/app/Constants/constants";

export default function AddNewExpense() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(OTHERS);
  const [transactionDate, setTransactionDate] = useState("");

  function AddNewExpenseButtonHandler() {
    setIsModalOpen(true);
  }

  function handleSaveTransaction() {
    setIsModalOpen(false);
  }

  return (
    <>
      <div>
        <button onClick={AddNewExpenseButtonHandler}>Add New Expense</button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div>
          <div>Add New Expense</div>

          <div>
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>

          <div>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="category">Choose Category</label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value={FOOD}>Food</option>
              <option value={TRAVEL}>Travel</option>
              <option value={RENT}>Rent</option>
              <option value={UTILITIES}>Utilities</option>
              <option value={OTHERS}>Others</option>
            </select>
          </div>

          <div>
            <label htmlFor="transactionDate">Date</label>
            <input
              type="date"
              id="transactionDate"
              value={transactionDate}
              onChange={(e) => setTransactionDate(e.target.value)}
            />
          </div>

          <button onClick={handleSaveTransaction}>Save</button>
          <button onClick={() => setIsModalOpen(false)}>Close</button>
        </div>
      </Modal>
    </>
  );
}
