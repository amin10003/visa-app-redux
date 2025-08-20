import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../app/Store";
import { resetPassportForm } from "../features/visa/passportSlice";
import { useNavigate } from "react-router-dom";


export default function ReviewPage() {
  const form = useSelector((state: RootState) => state.passport);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleConfirm = () => {
    // Reset the form after confirmation
    dispatch(resetPassportForm());
    navigate("/success");
  };

  return (
 <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl space-y-6">
  <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">
    Review Your Application
  </h2>

  <div className="space-y-3 text-gray-700">
    <p><span className="font-semibold">Full Name:</span> {form.fullName}</p>
    <p><span className="font-semibold">Nationality:</span> {form.nationality}</p>
    <p><span className="font-semibold">Passport Number:</span> {form.passportNumber}</p>
    <p><span className="font-semibold">Date of Expire:</span> {form.expiryDate}</p>
  </div>

  <button
    onClick={handleConfirm}
    className="w-full bg-indigo-600 text-white font-medium px-4 py-2 rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
  >
    Confirm Application
  </button>
</div>

  );}
     