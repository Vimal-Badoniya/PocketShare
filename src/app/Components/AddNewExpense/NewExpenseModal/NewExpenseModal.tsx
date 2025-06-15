import { EXPENSE_CATEGORY } from "@/app/Constants/constants";
import Modal from "../../common/Modal/Modal";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import {
  addNewTransactionField,
  resetTransactionFields,
} from "@/app/redux/slices/newExpenseSlice";
import { Transaction } from "@/app/Constants/interfaces";
import { addExpense } from "@/app/api/ledgers/addExpense";
import { v4 as uuidv4 } from "uuid";
import getLedgerList from "@/app/api/ledgers/getLedgerList";
import { setLedgerList } from "@/app/redux/slices/ledgerListSlice";
import Dropdown from "../../common/Dropdown/Dropdown";
import Messages from "@/app/Constants/messages";

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
      dispatch(resetTransactionFields());
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
          <label htmlFor="category">{Messages.chooseCategory}</label>
          <Dropdown
            options={EXPENSE_CATEGORY}
            selectedOption={EXPENSE_CATEGORY[0]}
            onSelect={(value) => {
              dispatch(
                addNewTransactionField({
                  fieldType: "category",
                  value: value?.value,
                })
              );
            }}
          />
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
