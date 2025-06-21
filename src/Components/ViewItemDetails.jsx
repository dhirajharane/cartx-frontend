import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchItemById } from "../services/api";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ViewItemDetails = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetchItemById(itemId)
      .then(setItem)
      .catch((err) => {
        console.error("Fetch error:", err);
        toast.error("Failed to load item");
      });
  }, [itemId]);

  const handleEnquire = () => {
    toast.success("Your email has been sent!", { autoClose: 1500 });
  };

  if (!item) {
    return (
      <div className="text-center mt-10 text-blue-600 font-medium">
        Loading item details...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6 flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-4xl">
        {/* Title */}
        <h1 className="text-3xl font-bold text-blue-700 mb-2 text-center">{item.name}</h1>
        <p className="text-center text-gray-500 mb-4 italic">{item.type}</p>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Carousel */}
          <div className="w-full lg:w-1/2">
            <Carousel
              showArrows
              showThumbs
              dynamicHeight={false}
              infiniteLoop
              className="rounded-lg shadow-md overflow-x-auto"
            >
              <div>
                <img src={item.imageUrl} alt={item.name} className="object-contain max-h-96" />
              </div>
              {item.additionalImages.map((img, idx) => (
                <div key={idx}>
                  <img src={img} alt={`Additional ${idx + 1}`} className="object-contain max-h-96" />
                </div>
              ))}
            </Carousel>
          </div>

          {/* Details */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <p className="text-gray-700 mb-4 text-justify">{item.description}</p>
            </div>

            <button
              onClick={handleEnquire}
              className="mt-4 w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition"
            >
              Enquire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewItemDetails;
