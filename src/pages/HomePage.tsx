import { Link } from "react-router-dom";


export default function HomePage() {
  return (
   <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-indigo-50 to-blue-100 px-4 text-center border-b-2 border-indigo-200  margin-auto" >
  <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
    Welcome to the <span className="text-indigo-600">Visa Application Portal</span>
  </h1>

  <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
    Start your visa application process today and get approved faster with our simple online system.
  </p>

<span className="flex flex-col md:flex-row gap-4">
    <Link
    to="/apply"
    className="px-8 py-3 bg-indigo-600 text-white font-medium text-lg rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
  >
    Apply Visa Now
  </Link>
  

    <Link
    to="/apply_Passport"
    className="px-8 py-3 bg-indigo-600 text-white font-medium text-lg rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
  >
    Apply passport Now 
  </Link>
</span>
</div>

  );
}



