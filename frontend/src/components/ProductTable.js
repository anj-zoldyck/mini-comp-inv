function ProductTable({ products, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead className="bg-[#8E1616] text-[#F8EEDF]">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Category</th>
            <th className="p-3">Qty</th>
            <th className="p-3">Price</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr
              key={p._id}
              className={`border-b border-gray-700 ${
                p.quantity < 5 ? "bg-red-900" : ""
              }`}
            >
              <td className="p-3">{p.name}</td>
              <td className="p-3">{p.category}</td>
              <td className="p-3">{p.quantity}</td>
              <td className="p-3">₱{p.price}</td>

              <td className="p-3 flex gap-2 justify-center">
                <button
                  className="px-3 py-1 bg-black text-[#F8EEDF] rounded hover:bg-gray-700"
                  onClick={() => onEdit(p)}
                >
                  Edit
                </button>

                <button
                  className="px-3 py-1 bg-[#8E1616] text-[#F8EEDF] rounded hover:bg-red-900"
                  onClick={() => onDelete(p._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
