import { useState, useEffect } from "react";

function ProductForm({ onSubmit, editProduct }) {
  const [product, setProduct] = useState({
    name: "",
    category: "GPU",
    quantity: "",
    price: "",
  });

  useEffect(() => {
    if (editProduct) {
      setProduct(editProduct);
    }
  }, [editProduct]);

  const handleInput = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    onSubmit(product);
    setProduct({ name: "", category: "GPU", quantity: "", price: "" });
  };

  return (
    <form onSubmit={submitForm} className="space-y-4">
      <h2 className="text-2xl font-semibold mb-3 text-[#F8EEDF]">
        {editProduct ? "Edit Product" : "Add Product"}
      </h2>

      <input
        name="name"
        placeholder="Product Name"
        value={product.name}
        onChange={handleInput}
        required
        className="w-full p-3 bg-black text-[#F8EEDF] rounded-md"
      />

      {/* Category dropdown */}
      <select
        name="category"
        value={product.category}
        onChange={handleInput}
        className="w-full p-3 bg-black text-[#F8EEDF] rounded-md"
      >
        <option>GPU</option>
        <option>CPU</option>
        <option>RAM</option>
        <option>Motherboard</option>
        <option>Storage</option>
        <option>PSU</option>
        <option>Case</option>
        <option>Cooler</option>
      </select>

      <input
        name="quantity"
        type="number"
        placeholder="Quantity"
        value={product.quantity}
        onChange={handleInput}
        required
        className="w-full p-3 bg-black text-[#F8EEDF] rounded-md"
      />

      <input
        name="price"
        type="number"
        placeholder="Price (₱)"
        value={product.price}
        onChange={handleInput}
        required
        className="w-full p-3 bg-black text-[#F8EEDF] rounded-md"
      />

      <button
        className="w-full py-3 rounded-md font-bold bg-[#8E1616] text-[#F8EEDF] hover:bg-red-900 transition"
      >
        {editProduct ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
}

export default ProductForm;
