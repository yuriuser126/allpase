import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import type { Transaction } from "../types/transaction";

interface TransactionTableProps {
  transactions: Transaction[];
}

const TransactionTable = ({ transactions }: TransactionTableProps) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>가맹점</TableCell>
          <TableCell>금액</TableCell>
          <TableCell>상태</TableCell>
          <TableCell>날짜</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {transactions.map((tx) => (
          <TableRow key={tx.id}>
            <TableCell>{tx.id}</TableCell>
            <TableCell>{tx.merchantName}</TableCell>
            <TableCell>{tx.amount}</TableCell>
            <TableCell>{tx.status}</TableCell>
            <TableCell>{tx.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default TransactionTable;
