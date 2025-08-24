import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VisaFormPage from "./pages/VisaFormPage";
import ReviewPage from "./pages/ReviewPage";
import SuccessPage from "./pages/SuccessPage";
import PassportFormPage from "./pages/PassportFormPage";
import ReviewPassport from "./pages/ReviewPassport";
import PassportSuccess from "./pages/PassportSuccess"; // ✅ Fixed import
import UsersList from "./pages/UserList";
import NoDependencyExample from "./pages/NodependeyExample";
import SingleDependency from "./pages/SingleDependency";
import MultipleDependedncies from "./pages/MultipleDependecies"; // ✅ Fixed import

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/apply" element={<VisaFormPage />} />
     <Route path="/apply-passport" element={<PassportFormPage />} />
      <Route path="/review" element={<ReviewPage />} />
      <Route path="/review_Passport" element={<ReviewPassport />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/success_Passport" element={<PassportSuccess />} />
      <Route path="/userlist" element={<UsersList />} />
      <Route path="/nodependency" element={<NoDependencyExample />} />
      <Route path="/single-dependency" element={<SingleDependency />} />
      <Route path="/multiple-dependencies" element={<MultipleDependedncies />} />


    </Routes>
  );
}

export default App;