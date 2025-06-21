import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import LandingPage from "./Components/LandingPage";
import ViewItemsPage from "./Components/ViewItemsPage";
import AddItemsPage from "./Components/AddItemsPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// Lazy load the ViewItemDetails component
const ViewItemDetailPage = lazy(() => import("./Components/ViewItemDetails"));

function App() {
  return (
    <BrowserRouter basename="/">
      <>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/view-items" element={<ViewItemsPage />} />
          <Route
            path="/view-items/:itemId"
            element={
              <Suspense fallback={<div className="text-center mt-10 text-blue-600 font-semibold">Loading item details...</div>}>
                <ViewItemDetailPage />
              </Suspense>
            }
          />
          <Route path="/add-items" element={<AddItemsPage />} />
        </Routes>
        
        <ToastContainer position="top-right" autoClose={3000} />
      </>
    </BrowserRouter>
  )
}

export default App;