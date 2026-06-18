import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import api from "../services/api";
import { Search, Plus } from "lucide-react";
import ProductsTable from "../components/ProductsTable";

function Products() {
  const [products, setProducts] = useState([]);

  

  useEffect(() => {
    const fetchProducts = async () => {
    try {
      const res = await api.get("/products");
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };
    fetchProducts();
  }, []);

  
  return (
    <Layout>
      <div className="space-y-6">

        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">
              Products
            </h1>

            <p className="text-gray-500">
              {products.length} Total Products
            </p>
          </div>

          <button
            className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-3 rounded-xl flex items-center gap-2"
          >
            <Plus size={18} />
            Add Product
          </button>
        </div>

        {/* Search */}
        <div className="bg-white p-4 rounded-2xl shadow-sm">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-3 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search Product..."
              className="w-full border rounded-xl pl-10 pr-4 py-3"
            />
          </div>
        </div>

        {/* Table */}
        <ProductsTable products={products} />

        </div>

    </Layout>
  );
}

export default Products;