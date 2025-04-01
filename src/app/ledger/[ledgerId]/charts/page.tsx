"use client";
import PieChart from "@/app/Components/common/Charts/PieChart/PieChart";
import { RootState } from "@/app/redux/store";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import { useSelector } from "react-redux";

const ChartPage = () => {
  const { ledgerId } = useParams();
  console.log(ledgerId);
  const ledger = useSelector((state: RootState) => state?.ledgerList)?.find(
    (ledger) => {
      return ledger?.id === ledgerId;
    }
  );
  console.log(ledger);

  const chartData = useMemo(() => {
    const data = new Map();
    ledger?.transactions?.forEach((trans) => {
      if (data.has(trans?.category)) {
        data.set(trans?.category, data.get(trans?.category) + trans?.amount);
      } else {
        data.set(trans?.category, trans?.amount);
      }
    });
    const labels = Array.from(data.keys());
    const values = Array.from(data.values());
    return [labels, values];
  }, [ledger]);

  return (
    <div>
      <PieChart labels={chartData[0]} data={chartData[1]} />
    </div>
  );
};

export default ChartPage;
