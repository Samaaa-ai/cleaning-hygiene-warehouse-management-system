function RecentActivity() {
  const activities = [
    {
      title: "Received 50 Dettol Bottles",
      time: "2 hours ago",
    },
    {
      title: "Dispatched 20 Lizol Units",
      time: "4 hours ago",
    },
    {
      title: "Batch B2026-03 Expiring Soon",
      time: "Today",
    },
    {
      title: "Hand Sanitizer Stock Low",
      time: "Today",
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">

      <h2 className="text-xl font-semibold mb-5">
        Recent Activity
      </h2>

      <div className="space-y-3">

        {activities.map((item, index) => (
          <div
            key={index}
            className="bg-slate-50 rounded-2xl p-4 flex justify-between items-center"
          >
            <span className="font-medium">
              {item.title}
            </span>

            <span className="text-sm text-gray-400">
              {item.time}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}

export default RecentActivity;