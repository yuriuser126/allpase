import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import CardSummary from "../components/CardSummary";
// import { getTransactions } from "../api/transactions";
import type { Transaction } from "../types/transaction";
import { mockTransactions } from "../mock/transactions";

const Dashboard = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    // getTransactions().then(setTransactions);
    // 실제 API 대신 mock 데이터 사용
    setTransactions(mockTransactions);
  }, []);

  const totalAmount = transactions.reduce((sum, t) => sum + t.amount, 0);

  return (
    <div style={{ padding: 20 }}>
      <h1>대시보드</h1>
      <Grid container spacing={2} style={{ marginTop: 10 }}>
        <CardSummary title="총 거래 건수" value={transactions.length} />
        <CardSummary title="총 결제 금액" value={totalAmount} />
        {/* 차트 컴포넌트 나중에 추가 가능 */}
      </Grid>
    </div>
  );
};

export default Dashboard;
