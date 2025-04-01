import { FiAlertCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const JobNotFound = () => {
  return (
    <div className="flex flex-col items-center py-36 justify-center text-center">
      <FiAlertCircle size={72} className="text-red-500 mb-4" />
      <h1 className="text-3xl font-bold mb-2">Job not found</h1>
      <p className="text-gray-500 mb-6">
        Looks like job you searched for doesn't exists or was deleted.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Home
      </Link>
    </div>
  );
};

export default JobNotFound;
