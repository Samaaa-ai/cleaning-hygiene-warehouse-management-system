import { Search } from "lucide-react";

function SearchBar({ placeholder }) {
  return (
    <div className="relative w-full">
      <Search
        className="absolute left-3 top-3 text-gray-400"
        size={18}
      />

      <input
        type="text"
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-3 border rounded-xl"
      />
    </div>
  );
}

export default SearchBar;