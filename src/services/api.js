const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"; // later replace with your prod URL

export async function fetchItems() {
  const res = await fetch(`${API_BASE}/items`);
  if (!res.ok) throw new Error("Failed to fetch items");
  return res.json();
}

export async function fetchItemById(id) {
  const res = await fetch(`${API_BASE}/items/${id}`);
  if (!res.ok) throw new Error("Item not found");
  return res.json();
}

export async function addItem(data) {
  const res = await fetch(`${API_BASE}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to add item");
  return res.json();
}
