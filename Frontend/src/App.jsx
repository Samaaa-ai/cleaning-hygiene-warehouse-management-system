import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Inventory from "./pages/Inventory";
import InwardStock from "./pages/InwardStock";
import OutwardStock from "./pages/OutwardStock";
import BatchTracker from "./pages/BatchTracker";
import Orders from "./pages/Orders";
import Reports from "./pages/Reports";
import Locations from "./pages/Locations";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />

      <Route path="/inventory" element={<Inventory />} />

      <Route path="/inward-stock" element={<InwardStock />} />

      <Route path="/outward-stock" element={<OutwardStock />} />

      <Route path="/batch-tracker" element={<BatchTracker />} />

      <Route path="/orders" element={<Orders />} />

      <Route path="/reports" element={<Reports />} />

      <Route path="/products" element={<Products />} />

      <Route path="/locations" element={<Locations />} />
    </Routes>
  );
}

export default App;