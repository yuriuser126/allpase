// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TransactionList from "./pages/TransactionList";

function App() {
  return (
    <Router>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ marginRight: 10 }}>대시보드</Link>
        <Link to="/transactions">거래 내역</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transactions" element={<TransactionList />} />
      </Routes>
    </Router>
  );
}

export default App;
