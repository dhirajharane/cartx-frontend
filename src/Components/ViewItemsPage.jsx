import { useEffect, useState } from "react";
import { fetchItems } from "../services/api";
import ItemCard from "./ItemCard";

const ViewItemsPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchItems()
      .then(data => setItems(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-center text-blue-600 mt-8">Loading items...</p>;
  }

  if (items.length === 0) {
    return <p className="text-center text-gray-600 mt-8">No items found. Add some!</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Your Items</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {items.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ViewItemsPage;
