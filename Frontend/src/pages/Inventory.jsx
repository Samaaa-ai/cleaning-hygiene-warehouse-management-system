import Layout from "../components/Layout";
import InventoryTable from "../components/InventoryTable";
import { Search, Plus } from "lucide-react";

function Inventory() {
  return (
    <Layout>

      <div className="space-y-6">

        <div className="flex justify-between items-center">

          <div>
            <h1 className="text-3xl font-bold">
              Inventory
            </h1>

            <p className="text-slate-500">
              Product inventory overview
            </p>
          </div>

          <button className="bg-[#0F3D3E] text-white px-5 py-3 rounded-xl">
            <Plus size={18} />
          </button>

        </div>

        <div className="flex gap-4">

          <div className="relative flex-1">

            <Search
              size={18}
              className="absolute left-4 top-4 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search name, brand, batch..."
              className="w-full border rounded-2xl pl-12 py-3"
            />

          </div>

          <select className="border rounded-2xl px-4">
            <option>All Categories</option>
          </select>

          <select className="border rounded-2xl px-4">
            <option>All Statuses</option>
          </select>

          <button className="bg-[#0F3D3E] text-white px-6 rounded-2xl">
            + Add Product
          </button>

        </div>

        <InventoryTable />

      </div>

    </Layout>
  );
}

export default Inventory;