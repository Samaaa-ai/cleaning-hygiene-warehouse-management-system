function LowStockTable() {
  const products = [
    {
      name: "Lizol Floor Cleaner",
      stock: 8,
    },
    {
      name: "Vim Powder",
      stock: 5,
    },
    {
      name: "Rin Detergent",
      stock: 3,
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">

      <h2 className="text-xl font-semibold mb-5">
        Low Stock Products
      </h2>

      <div className="space-y-3">

        {products.map((item) => (
          <div
            key={item.name}
            className="bg-red-50 rounded-2xl p-4 flex justify-between"
          >
            <span>
              {item.name}
            </span>

            <span className="font-bold text-red-600">
              {item.stock}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}

export default LowStockTable;