import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

function SuccessCard() {
  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl p-10 text-center max-w-xl">
        <FaCheckCircle size={90} className="mx-auto text-green-500" />

        <h1 className="text-4xl font-bold mt-6">Payment Successful</h1>

        <p className="text-gray-600 mt-4">
          Your course registration has been completed successfully.
        </p>

        <div className="mt-8">
          <Link to="/">
            <button className="bg-blue-700 text-white px-8 py-3 rounded-lg">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SuccessCard;
