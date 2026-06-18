function EmptyState({ message }) {
  return (
    <div className="bg-white rounded-2xl p-10 text-center">
      <p className="text-gray-500">{message}</p>
    </div>
  );
}

export default EmptyState;