function ProductsTable({ products }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

      <table className="w-full">

        <thead className="bg-gray-50">
          <tr>
            <th className="text-left p-4">ID</th>
            <th className="text-left p-4">Product</th>
            <th className="text-left p-4">Brand</th>
            <th className="text-left p-4">SKU</th>
            <th className="text-left p-4">Pack Size</th>
            <th className="text-left p-4">Reorder Level</th>
          </tr>
        </thead>

        <tbody>

          {products.map((product) => (
            <tr
              key={product.product_id}
              className="border-t hover:bg-gray-50 transition"
            >
              <td className="p-4">
                {product.product_id}
              </td>

              <td className="p-4 font-medium">
                {product.product_name}
              </td>

              <td className="p-4">
                {product.brand}
              </td>

              <td className="p-4">
                {product.sku}
              </td>

              <td className="p-4">
                {product.pack_size}
              </td>

              <td className="p-4">
                {product.reorder_level}
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ProductsTable;