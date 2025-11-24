import type { Transaction } from "../types/transaction";

export const mockTransactions: Transaction[] = [
  { id: "one", merchantName: "가맹점A", amount: 12000, status: "success", date: "2025-11-24" },
  { id: "two", merchantName: "가맹점B", amount: 35000, status: "failed", date: "2025-11-23" },
  { id: "three", merchantName: "가맹점C", amount: 7800, status: "success", date: "2025-11-22" },
  { id: "four", merchantName: "가맹점D", amount: 15000, status: "pending", date: "2025-11-21" },
];
