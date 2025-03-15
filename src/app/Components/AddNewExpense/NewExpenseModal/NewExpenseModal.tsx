import {
  FOOD,
  OTHERS,
  RENT,
  TRAVEL,
  UTILITIES,
} from "@/app/Constants/constants";
import Modal from "../../common/Modal/Modal";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { addNewTransactionField } from "@/app/redux/slices/newExpenseSlice";
import { Transaction } from "@/app/Constants/interfaces";
import { addExpense } from "@/app/api/ledgers/addExpense";
import { v4 as uuidv4 } from "uuid";
import getLedgerList from "@/app/api/ledgers/getLedgerList";
import { setLedgerList } from "@/app/redux/slices/ledgerListSlice";

interface AddNewExpenseModalProps {
  onModalClose: () => void;
}

export default function NewExpenseModal({
  onModalClose = () => {},
}: AddNewExpenseModalProps) {
  const params = useParams();
  const dispatch = useDispatch();

  const { ledgerId } = params;

  const newExpenseDetails = useSelector(
    (state: RootState) => state?.newExpense
  );

  const handleSaveExpense = async () => {
    const payload: Transaction = {
      ...newExpenseDetails,
      id: uuidv4(),
    };

    try {
      await addExpense(ledgerId as string, payload);
      getLedgerList().then((ledgers) => {
        dispatch(setLedgerList(ledgers));
      });
      onModalClose();
    } catch (error) {
      console.error("Error saving Expense:", error);
    }
  };

  return (
    <Modal isOpen onClose={() => onModalClose()}>
      <div>
        <div>Add New Expense</div>

        <div>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={newExpenseDetails?.amount ? newExpenseDetails?.amount : ""}
            onChange={(e) =>
              dispatch(
                addNewTransactionField({
                  fieldType: "amount",
                  value: Number(e.target.value),
                })
              )
            }
          />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            value={newExpenseDetails?.description}
            onChange={(e) =>
              dispatch(
                addNewTransactionField({
                  fieldType: "description",
                  value: e.target.value,
                })
              )
            }
          />
        </div>

        <div>
          <label htmlFor="category">Choose Category</label>
          <select
            id="category"
            value={newExpenseDetails?.category}
            onChange={(e) =>
              dispatch(
                addNewTransactionField({
                  fieldType: "category",
                  value: e.target.value,
                })
              )
            }
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
            value={newExpenseDetails?.transactionDate}
            onChange={(e) =>
              dispatch(
                addNewTransactionField({
                  fieldType: "transactionDate",
                  value: e.target.value,
                })
              )
            }
          />
        </div>

        <button onClick={handleSaveExpense}>Save</button>
        <button onClick={() => onModalClose()}>Close</button>
      </div>
    </Modal>
  );
}
