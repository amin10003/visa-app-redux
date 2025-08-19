import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VisaFormPage from "./pages/VisaFormPage";
import ReviewPage from "./pages/ReviewPage"; // ✅ Corrected import
import SuccessPage from "./pages/SuccessPage"; // Ensure this file exists

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/apply" element={<VisaFormPage />} />
      <Route path="/review" element={<ReviewPage />} /> {/* ✅ Updated component name */}
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
  );
}

export default App;