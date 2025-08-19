import { Link } from "react-router-dom";


export default function SuccessPage() {
  return (
   <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
  <div className="bg-white shadow-lg rounded-xl p-8 text-center max-w-md w-full">
    <h1 className="text-4xl font-extrabold text-green-600 mb-3">✅ Success!</h1>
    <p className="text-lg text-gray-700 mb-6">
      Your operation was successful.
    </p>
    <Link
      to="/"
      className="inline-block px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      Go to Home
    </Link>
  </div>
</div>

  );
}
