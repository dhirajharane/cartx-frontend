import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { addItem } from "../services/api";
import { toast, ToastContainer } from "react-toastify";
import { PlusCircle } from "lucide-react";

const AddItemsPage = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);
  const [additionalPreviews, setAdditionalPreviews] = useState([]);
  const [specifyOther, setSpecifyOther] = useState("");
  const navigate = useNavigate();

  // Refs to trigger file inputs
  const coverInputRef = useRef();
  const additionalInputRef = useRef();

  const handleImageUpload = async (file) => {
    const url = `https://api.cloudinary.com/v1_1/djnhdzw7q/image/upload`;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "gc1ckdii");

    const res = await fetch(url, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (data.secure_url) return data.secure_url;
    throw new Error("Image upload failed");
  };

  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    setCoverImage(file);
    if (file) {
      setCoverPreview(URL.createObjectURL(file));
    }
  };

  const handleAdditionalChange = (e) => {
    const files = Array.from(e.target.files);
    setAdditionalImages(files);
    const previews = files.map((file) => URL.createObjectURL(file));
    setAdditionalPreviews(previews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      toast.info("Uploading images...", { autoClose: 1500 });

      const coverUrl = await handleImageUpload(coverImage);
      const additionalUrls = [];
      for (const file of additionalImages) {
        const url = await handleImageUpload(file);
        additionalUrls.push(url);
      }

      const itemData = {
        name,
        type: type === "Other" ? specifyOther : type,
        description,
        imageUrl: coverUrl,
        additionalImages: additionalUrls,
      };

      await addItem(itemData);

      toast.success("Item successfully added!", { autoClose: 1500 });
      setTimeout(() => navigate("/view-items"), 2000);
    } catch (err) {
      console.error(err);
      toast.error("Failed to add item");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">Add New Item</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Item Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          >
            <option value="">Select Item Type</option>
            <option value="Shirt">Shirt</option>
            <option value="Pant">Pant</option>
            <option value="Shoes">Shoes</option>
            <option value="Sports Gear">Sports Gear</option>
            <option value="Other">Other</option>
          </select>

          {type === "Other" && (
            <input
              type="text"
              placeholder="Specify other type"
              value={specifyOther}
              onChange={(e) => setSpecifyOther(e.target.value)}
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          )}

          <textarea
            placeholder="Item Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />

          <div>
            <label className="block mb-1 font-medium">Cover Image</label>
            <div
              className="border-2 border-dashed border-blue-300 rounded-lg p-4 text-center cursor-pointer hover:bg-blue-50"
              onClick={() => coverInputRef.current.click()}
            >
              {coverPreview ? (
                <img
                  src={coverPreview}
                  alt="Cover preview"
                  className="mx-auto h-40 object-contain"
                />
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <PlusCircle className="w-8 h-8 text-blue-400 mb-2" />
                  <p className="text-sm text-gray-500">Click to upload cover image</p>
                </div>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleCoverChange}
              ref={coverInputRef}
              className="hidden"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Additional Images</label>
            <div
              className="border-2 border-dashed border-blue-300 rounded-lg p-4 text-center cursor-pointer hover:bg-blue-50"
              onClick={() => additionalInputRef.current.click()}
            >
              <p className="text-sm text-gray-500">Click to upload additional images</p>
              <div className="flex flex-wrap gap-2 mt-2 justify-center">
                {additionalPreviews.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`Additional preview ${idx + 1}`}
                    className="h-16 w-16 object-cover rounded border"
                  />
                ))}
              </div>
            </div>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleAdditionalChange}
              ref={additionalInputRef}
              className="hidden"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
          >
            Add Item
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddItemsPage;
