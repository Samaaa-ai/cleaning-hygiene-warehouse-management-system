function StatCard({
  title,
  value,
  subtitle,
  icon,
}) {
  return (
    <div className="
bg-white
rounded-3xl
p-6
border
border-slate-100
shadow-[0_8px_30px_rgb(0,0,0,0.04)]
hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)]
transition-all
">

      <div className="flex justify-between items-center mb-4">
        <h3 className="text-gray-500 font-medium">
          {title}
        </h3>

        <div className="text-2xl">
          {icon}
        </div>
      </div>

      <h2 className="text-3xl font-bold">
        {value}
      </h2>

      <p className="text-gray-400 mt-2">
        {subtitle}
      </p>

    </div>
  );
}

export default StatCard;