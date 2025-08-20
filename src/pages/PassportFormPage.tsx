import { useDispatch, useSelector } from "react-redux";
import { updatePassportForm } from "../features/visa/passportSlice";
import type { RootState } from  "../app/Store";
import { useNavigate } from "react-router-dom";


export default function passportFormPage() {
    const form = useSelector((state: RootState) => state.passport);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            dispatch(updatePassportForm({[e.target.name]: e.target.value}));
           
    };

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();
    navigate("/review_Passport");
  };

  return (
  
  <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 space-y-4 bg-white shadow-md rounded-lg">
  <input
    name="fullName"
    value={form.fullName}
    onChange={handleChange}
    placeholder="Enter your full name"
    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
  />

  <input
    name="nationality"
    value={form.nationality}
    onChange={handleChange}
    placeholder="Enter your Country of Nationality"
    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
  />

  <input
    name="passportNumber"
    value={form.passportNumber}
    onChange={handleChange}
    placeholder="Enter your Passport Number"
    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
  />

  <input
  type="date"
  name="expiryDate"
  value={form.expiryDate}
  onChange={handleChange}
  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
/>
  <button
    type="submit"
    className="w-full bg-indigo-600 text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
  >
    Submit
  </button>
</form>

  )
};