import { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "./components/ProductForm";
import ProductTable from "./components/ProductTable";
import { Toaster, toast } from "react-hot-toast";

const API_URL = "/api/products";

function App() {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await axios.get(API_URL);
    setProducts(res.data);
  };

  const addOrUpdateProduct = async (product) => {
    try {
      if (product._id) {
        await axios.put(`${API_URL}/${product._id}`, product);
        toast.success("Product updated!");
      } else {
        await axios.post(API_URL, product);
        toast.success("Product added!");
      }

      setEditProduct(null);
      fetchProducts();
    } catch {
      toast.error("Failed to save product");
    }
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    toast.success("Product deleted!");
    fetchProducts();
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#2C2C2C]">

      <Toaster position="top-right" />

      {/* STICKY NAVBAR */}
      <nav className="w-full bg-black text-[#F8EEDF] flex items-center justify-center h-16 sticky top-0 z-50 shadow-md">
        <h1 className="text-2xl font-bold">Computer Hardware Inventory System</h1>
      </nav>

      <div className="p-6 max-w-5xl mx-auto">

        {/* SEARCH BAR */}
        <div className="mt-6">
          <input
            type="text"
            placeholder="Search product..."
            className="w-full p-3 rounded-md bg-[#1a1a1a] text-[#F8EEDF] focus:outline-none focus:ring-2 focus:ring-[#8E1616]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* FORM */}
        <div className="mt-8 bg-[#1a1a1a] p-6 rounded-lg shadow-lg">
          <ProductForm onSubmit={addOrUpdateProduct} editProduct={editProduct} />
        </div>

        {/* TABLE */}
        <div className="mt-10 bg-[#1a1a1a] p-6 rounded-lg shadow-lg overflow-x-auto">
          <ProductTable
            products={filteredProducts}
            onEdit={setEditProduct}
            onDelete={deleteProduct}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
