import {
  LayoutDashboard,
  Package,
  Warehouse,
  ClipboardList,
  ArrowLeftRight,
  BarChart3,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menuItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    path: "/",
  },
  {
    icon: Package,
    label: "Inventory",
    path: "/inventory",
  },
  {
    icon: ArrowLeftRight,
    label: "Inward Stock",
    path: "/inward-stock",
  },
  {
    icon: ArrowLeftRight,
    label: "Outward Stock",
    path: "/outward-stock",
  },
  {
    icon: ClipboardList,
    label: "Batch Tracker",
    path: "/batch-tracker",
  },
  {
    icon: ClipboardList,
    label: "Orders",
    path: "/orders",
  },
  {
    icon: BarChart3,
    label: "Reports",
    path: "/reports",
  },
  {
    icon: Package,
    label: "Products",
    path: "/products",
  },
  {
    icon: Warehouse,
    label: "Locations",
    path: "/locations",
  },
];

function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-[#0F3D3E] text-white flex flex-col">
      
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold">
          Warehouse MS
        </h1>

        <p className="text-sm text-slate-400 mt-1">
          Inventory Management
        </p>
      </div>

      <div className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? "bg-[#D8A657] text-white"
                    : "text-slate-300 hover:bg-slate-800"
                }`
              }
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </div>

      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-[#D8A657] flex items-center justify-center font-bold">
            SK
          </div>

          <div>
            <p className="font-medium">
              Sama
            </p>

            <p className="text-xs text-slate-400">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;