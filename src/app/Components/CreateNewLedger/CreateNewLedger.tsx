interface CreateNewLedgerProps {
  ledgerLabel: string;
}

export default function CreateNewLedger({ ledgerLabel }: CreateNewLedgerProps) {
  return <button>{ledgerLabel}</button>;
}
