import { Plus } from "lucide-react";

function AddButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-3 rounded-xl flex items-center gap-2"
    >
      <Plus size={18} />
      {text}
    </button>
  );
}

export default AddButton;