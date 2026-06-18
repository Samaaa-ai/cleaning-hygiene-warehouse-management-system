function PageHeader({ title, count }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-gray-500">
          {count} total {title.toLowerCase()}
        </p>
      </div>
    </div>
  );
}

export default PageHeader;