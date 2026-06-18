function InventoryTable() {
  const inventory = [
    {
      product: "Lizol Floor Cleaner",
      category: "Floor Cleaner",
      brand: "Lizol",
      pack: "1L",
      warehouse: "WH-A",
      batch: "BT-001",
      expiry: "2026-08-02",
      qty: 240,
      reorder: 50,
      price: "₹120",
      status: "In Stock",
    },
    {
      product: "Domex Disinfectant",
      category: "Disinfectant",
      brand: "Domex",
      pack: "500ml",
      warehouse: "WH-A",
      batch: "BT-002",
      expiry: "2026-06-26",
      qty: 35,
      reorder: 40,
      price: "₹85",
      status: "Low Stock",
    },
    {
      product: "Dettol Hand Wash",
      category: "Hand Care",
      brand: "Dettol",
      pack: "500ml",
      warehouse: "WH-B",
      batch: "BT-003",
      expiry: "2026-12-15",
      qty: 120,
      reorder: 30,
      price: "₹95",
      status: "In Stock",
    },
  ];

  const statusColor = {
    "In Stock":
      "bg-emerald-50 text-emerald-700",

    "Low Stock":
      "bg-amber-50 text-amber-700",

    Expired:
      "bg-purple-50 text-purple-700",

    "Out of Stock":
      "bg-red-50 text-red-700",
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">

      <table className="w-full">

        <thead className="bg-slate-50">
          <tr className="text-left text-slate-500">

            <th className="p-4">Product</th>
            <th className="p-4">Category</th>
            <th className="p-4">Brand</th>
            <th className="p-4">Pack</th>
            <th className="p-4">Warehouse</th>
            <th className="p-4">Batch</th>
            <th className="p-4">Expiry</th>
            <th className="p-4">Qty</th>
            <th className="p-4">Reorder</th>
            <th className="p-4">Price</th>
            <th className="p-4">Status</th>

          </tr>
        </thead>

        <tbody>

          {inventory.map((item, index) => (
            <tr
              key={index}
              className="border-t hover:bg-slate-50"
            >
              <td className="p-4 font-medium">
                {item.product}
              </td>

              <td className="p-4">
                {item.category}
              </td>

              <td className="p-4">
                {item.brand}
              </td>

              <td className="p-4">
                {item.pack}
              </td>

              <td className="p-4">
                {item.warehouse}
              </td>

              <td className="p-4">
                {item.batch}
              </td>

              <td className="p-4">
                {item.expiry}
              </td>

              <td className="p-4 font-semibold text-emerald-700">
                {item.qty}
              </td>

              <td className="p-4">
                {item.reorder}
              </td>

              <td className="p-4">
                {item.price}
              </td>

              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${statusColor[item.status]}`}
                >
                  {item.status}
                </span>
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default InventoryTable;