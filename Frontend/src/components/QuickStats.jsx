import {
  Plus,
  ArrowDown,
  ArrowUp,
  FileText,
} from "lucide-react";

function QuickStats() {
  const actions = [
    {
      title: "Add Product",
      icon: <Plus />,
    },
    {
      title: "Receive Stock",
      icon: <ArrowDown />,
    },
    {
      title: "Dispatch Stock",
      icon: <ArrowUp />,
    },
    {
      title: "Generate Report",
      icon: <FileText />,
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6">

      {actions.map((action) => (
        <div
          key={action.title}
          className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl cursor-pointer transition"
        >
          <div className="text-amber-500 mb-3">
            {action.icon}
          </div>

          <h3 className="font-semibold">
            {action.title}
          </h3>
        </div>
      ))}

    </div>
  );
}

export default QuickStats;