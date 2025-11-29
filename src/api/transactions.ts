import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL;

export interface Transaction {
  id: string;
  merchantName: string;
  amount: number;
  status: "success" | "failed" | "pending";
  date: string;
}

// 거래 내역 조회
export const getTransactions = async (): Promise<Transaction[]> => {
  try {
    const res = await axios.get(`${API_BASE}/transactions`);
    return res.data;
  } catch (error) {
    console.error("Error fetching transactions", error);
    return [];
  }
};
