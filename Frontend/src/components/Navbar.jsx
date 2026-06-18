import { Search, Bell } from "lucide-react";

function Navbar() {
  return (
    <div className="h-20 bg-white border-b flex items-center justify-between px-8">
      <div className="relative">
        <Search
          className="absolute left-3 top-3 text-gray-400"
          size={18}
        />

        <input
          type="text"
          placeholder="Search anything..."
          className="pl-10 w-80 h-11 border rounded-xl outline-none"
        />
      </div>

      <div className="flex items-center gap-5">
        <Bell size={20} />

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
            SK
          </div>

          <div>
            <p className="font-semibold">Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;