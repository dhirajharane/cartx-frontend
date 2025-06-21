import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 text-center p-4">
      <h1 className="text-5xl font-extrabold text-blue-800 mb-4">Welcome to CartX</h1>
      <p className="text-lg text-blue-700 mb-8">Add items and view your collection with ease.</p>

      <div className="flex gap-6">
        <Link to="/view-items">
        <button className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300 shadow-lg cursor-pointer">
          View Items
        </button>
        </Link>
         <Link to="/add-items">
        <button className="px-6 py-3 rounded-2xl bg-white text-blue-600 font-semibold border border-blue-600 hover:bg-blue-50 transition duration-300 shadow-lg cursor-pointer">
          Add Items
        </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
