"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "../common/Modal/Modal";
import { addLedger } from "@/app/api/ledgers/addLedger";
import { Participant } from "@/app/Constants/interfaces";
import { TIMEFRAME } from "@/app/Constants/constants";

interface CreateNewLedgerProps {
  ledgerLabel: string;
}

export default function CreateNewLedger({ ledgerLabel }: CreateNewLedgerProps) {
  const [isOpen, setisOpen] = useState(false);
  const [ledgerName, setLedgerName] = useState("");
  const [ledgerDescription, setLedgerDescription] = useState("");
  const [ledgerTimeFrame, setLedgerTimeFrame] = useState("monthly");
  const [ledgerMonth, setLedgerMonth] = useState("");
  const [participantName, setParticipantName] = useState("");
  const [participants, setParticipants] = useState<Participant[]>([]);
  const router = useRouter();

  function CreateNewLedgerHandler() {
    console.log("Button clicked");
    setisOpen(true);
  }

  const handleAddParticipant = () => {
    if (participantName.trim()) {
      setParticipants([
        ...participants,
        { name: participantName, id: new Date().getTime().toString() },
      ]);
      setParticipantName("");
    }
  };

  const handleSaveLedger = async () => {
    const newLedger = {
      createdBy: "PS1",
      name: ledgerName,
      description: ledgerDescription,
      createdAt: Date.now(),
      participants,
      ledgerType: TIMEFRAME,
    };

    try {
      const ledgerId = await addLedger(newLedger);
      console.log("New Ledger:", newLedger);
      setisOpen(false);
      router.push(`/ledger/${ledgerId}`);
    } catch (error) {
      console.error("Error saving ledger:", error);
    }
  };

  return (
    <>
      <button onClick={CreateNewLedgerHandler}>{ledgerLabel}</button>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setisOpen(false);
        }}
      >
        <div>
          <div>NEW LEDGER</div>

          <div>
            <label htmlFor="ledgerName">Ledger Name</label>
            <input
              type="text"
              id="ledgerName"
              value={ledgerName}
              onChange={(e) => setLedgerName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="ledgerDescription">Description</label>
            <input
              type="text"
              id="ledgerDescription"
              value={ledgerDescription}
              onChange={(e) => setLedgerDescription(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="ledgerTimeFrame">
              Choose Timeframe (Weekly,Monthly,Yearly)
            </label>
            <select
              id="ledgerTimeFrame"
              value={ledgerTimeFrame}
              onChange={(e) => setLedgerTimeFrame(e.target.value)}
            >
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>

          <div>
            <label htmlFor="ledgerMonth">Select Month</label>
            <input
              type="month"
              id="ledgerMonth"
              value={ledgerMonth}
              onChange={(e) => setLedgerMonth(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="ledgerParticipants">Add Participants</label>
            <input
              type="text"
              id="ledgerParticipants"
              value={participantName}
              onChange={(e) => setParticipantName(e.target.value)}
            />
            <button onClick={handleAddParticipant}>Add</button>
          </div>

          <ul>
            {participants.map((participant) => (
              <li key={participant.id}>{participant.name}</li>
            ))}
          </ul>

          <button onClick={handleSaveLedger}>Save</button>
          <button onClick={() => setisOpen(false)}>Close</button>
        </div>
      </Modal>
    </>
  );
}
