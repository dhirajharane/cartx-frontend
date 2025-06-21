import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  const { _id, imageUrl, name, description } = item;

  return (
    <Link to={`/view-items/${_id}`} className="block">
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 transition duration-300 w-64 h-80 flex flex-col overflow-hidden">
        
        <div className="w-full h-40 bg-gray-100">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        
        <div className="flex-1 p-3 flex flex-col justify-between">
          <div>
            <h3 className="text-base font-semibold text-gray-800 mb-1 truncate">{name}</h3>
            <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
