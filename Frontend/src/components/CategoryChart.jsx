function CategoryChart() {
  const data = [
    {
      name: "Floor Cleaners",
      value: 1042,
    },
    {
      name: "Disinfectants",
      value: 794,
    },
    {
      name: "Hygiene Items",
      value: 580,
    },
    {
      name: "Toilet Cleaners",
      value: 424,
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">

      <h2 className="text-xl font-bold mb-6">
        Stock By Category
      </h2>

      <div className="space-y-5">

        {data.map((item) => (
          <div key={item.name}>

            <div className="flex justify-between mb-2">
              <span>{item.name}</span>

              <span>{item.value}</span>
            </div>

            <div className="h-3 bg-gray-200 rounded-full">
              <div
                className="h-3 bg-amber-500 rounded-full"
                style={{
                  width: `${item.value / 12}%`,
                }}
              />
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default CategoryChart;