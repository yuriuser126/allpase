import { useEffect, useState } from "react";
import TransactionTable from "../components/TransactionTable";
import type { Transaction } from "../types/transaction";
// import { getTransactions } from "../api/transactions";
import { mockTransactions } from "../mock/transactions";

const TransactionList = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    // getTransactions().then(setTransactions);
    setTransactions(mockTransactions);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>거래 내역 리스트</h1>
      <TransactionTable transactions={transactions} />
    </div>
  );
};

export default TransactionList;
