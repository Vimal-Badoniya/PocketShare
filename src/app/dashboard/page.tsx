import CreateNewLedger from "../Components/CreateNewLedger/CreateNewLedger";
import LedgerList from "../Components/LedgerList/LedgerList";

export default function Dashboard() {
  return (
    <div>
      <CreateNewLedger />
      <LedgerList />
    </div>
  );
}
