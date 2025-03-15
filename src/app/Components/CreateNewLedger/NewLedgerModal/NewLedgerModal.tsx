"use client";
import { useState } from "react";
import Modal from "../../common/Modal/Modal";
import { Ledger } from "@/app/Constants/interfaces";
import { NEW_LEDGER_TITLE } from "@/app/Constants/constants";
import { addLedger } from "@/app/api/ledgers/addLedger";
import { useRouter } from "next/navigation";
import Messages from "@/app/Constants/messages";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { addNewLedgerField } from "@/app/redux/slices/newLedgerSlice";
import { v4 as uuidv4 } from "uuid";

interface NewLedgerModalProps {
  onModalClose: () => void;
}

export default function NewLedgerModal({ onModalClose }: NewLedgerModalProps) {
  const router = useRouter();
  const dispatch = useDispatch();

  const newLedgerDetails = useSelector((state: RootState) => state?.newLedger);

  const [participantName, setParticipantName] = useState("");

  const handleAddParticipant = () => {
    if (participantName.trim()) {
      dispatch(
        addNewLedgerField({
          fieldType: "participants",
          value: [
            ...newLedgerDetails?.participants,
            { name: participantName, id: uuidv4() },
          ],
        })
      );
      setParticipantName("");
    }
  };

  const handleSaveLedger = async () => {
    const payload: Ledger = {
      ...newLedgerDetails,
      createdAt: Date.now(),
    };

    try {
      const ledgerId = await addLedger(payload);
      onModalClose();
      router.push(`/ledger/${ledgerId}`);
    } catch (error) {
      console.error("Error saving ledger:", error);
    }
  };

  return (
    <Modal isOpen onClose={onModalClose}>
      <div>
        <div>{Messages.newExpensePlan}</div>

        <div>
          <label htmlFor="ledgerName">
            {
              NEW_LEDGER_TITLE.find(
                (item) => item.id === newLedgerDetails.ledgerType
              )?.label
            }
          </label>
          <input
            type="text"
            id="ledgerName"
            value={newLedgerDetails?.name}
            onChange={(e) =>
              dispatch(
                addNewLedgerField({ fieldType: "name", value: e.target.value })
              )
            }
          />
        </div>

        <div>
          <label htmlFor="ledgerDescription">{Messages.description}</label>
          <input
            type="text"
            id="ledgerDescription"
            value={newLedgerDetails?.description}
            onChange={(e) =>
              dispatch(
                addNewLedgerField({
                  fieldType: "description",
                  value: e.target.value,
                })
              )
            }
          />
        </div>

        <div>
          <label htmlFor="ledgerParticipants">
            {Messages.addMembersWhoWillShareExpensesWithYou}
          </label>
          <ul>
            {newLedgerDetails?.participants?.map((participant) => (
              <li key={participant.id}>{participant.name}</li>
            ))}
          </ul>
          <input
            type="text"
            id="ledgerParticipants"
            value={participantName}
            onChange={(e) => setParticipantName(e.target.value)}
          />
          <button onClick={handleAddParticipant}>Add</button>
        </div>

        <button onClick={handleSaveLedger}>Save</button>
        <button onClick={onModalClose}>Close</button>
      </div>
    </Modal>
  );
}
