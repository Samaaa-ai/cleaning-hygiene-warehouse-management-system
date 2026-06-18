function ExpiryTable() {
  const batches = [
    {
      batch: "B2026-01",
      days: 10,
    },
    {
      batch: "B2026-02",
      days: 17,
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">

      <h2 className="text-xl font-semibold mb-5">
        Expiring Batches
      </h2>

      <div className="space-y-3">

        {batches.map((item) => (
          <div
            key={item.batch}
            className="bg-amber-50 rounded-2xl p-4 flex justify-between"
          >
            <span>
              {item.batch}
            </span>

            <span className="font-bold text-amber-600">
              {item.days} days
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}

export default ExpiryTable;