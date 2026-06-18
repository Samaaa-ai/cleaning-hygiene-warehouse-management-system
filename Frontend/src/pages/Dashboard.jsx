import Layout from "../components/Layout";
import StatCard from "../components/StatCard";
import CategoryChart from "../components/CategoryChart";
import RecentActivity from "../components/RecentActivity";
import LowStockTable from "../components/LowStockTable";
import ExpiryTable from "../components/ExpiryTable";
import QuickStats from "../components/QuickStats";

import {
  Package,
  AlertTriangle,
  Warehouse,
  IndianRupee,
} from "lucide-react";

function Dashboard() {
  return (
    <Layout>

      <div className="space-y-6">

        {/* Hero Banner */}

        <div className="bg-gradient-to-r from-[#0F3D3E] to-[#1F6F78] text-white rounded-3xl p-8">

          <h1 className="text-4xl font-bold mb-2">
            Hey!
          </h1>

          <p className="text-slate-300">
            Cleaning & Hygiene Warehouse Overview
          </p>

        </div>

        {/* KPI Cards */}

        <div className="grid grid-cols-4 gap-6">

          <StatCard
            title="Products"
            value="48"
            subtitle="Active SKUs"
            icon={<Package />}
          />

          <StatCard
            title="Locations"
            value="12"
            subtitle="Storage Racks"
            icon={<Warehouse />}
          />

          <StatCard
            title="Low Stock"
            value="3"
            subtitle="Need Reorder"
            icon={<AlertTriangle />}
          />

          <StatCard
            title="Inventory Value"
            value="₹4.2L"
            subtitle="Current Stock"
            icon={<IndianRupee />}
          />

        </div>

        {/* Alerts */}

        <div className="grid grid-cols-2 gap-6">

          <div className="bg-[#FFF5F3] border border-red-200 rounded-3xl p-6">

            <h3 className="font-bold text-red-600 mb-2">
              Expiry Alert
            </h3>

            <p>
              2 batches are expiring within 30 days.
            </p>

          </div>

          <div className="bg-[#FFF9EC] border border-yellow-200 rounded-3xl p-6">

            <h3 className="font-bold text-yellow-600 mb-2">
              Reorder Alert
            </h3>

            <p>
              3 products are below reorder level.
            </p>

          </div>
          <div className="grid grid-cols-2 gap-6">
  <CategoryChart />
  <RecentActivity />
</div>

<div className="grid grid-cols-2 gap-6">
  <LowStockTable />
  <ExpiryTable />
</div>

<QuickStats />

        </div>

      </div>

    </Layout>
  );
}

export default Dashboard;