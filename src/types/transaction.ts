// src/types/transaction.ts

export interface Transaction {
  id: string;            // mockTransactions에서 "one", "two" 같은 문자열
  merchantName: string;  // 가맹점 이름
  amount: number;        // 결제 금액
  status: "success" | "failed" | "pending"; // 거래 상태
  date: string;          // 날짜, "YYYY-MM-DD" 형식
}
