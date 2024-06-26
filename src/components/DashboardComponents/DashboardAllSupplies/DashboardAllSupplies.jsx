import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Heading from "../../ui/Heading";
import Loader from "../../ui/Loader/Loader";

const DashboardAllSupplies = () => {
  const [supplies, setSupplies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://resilience-backend.vercel.app/supplies")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((jsonData) => {
        setSupplies(jsonData);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this supply?")) {
      fetch(`/api/supplies/${id}`, { method: "DELETE" }).then(() =>
        setSupplies(supplies.filter((supply) => supply.id !== id))
      );
    }
  };

  return (
    <div className="md:px-10 px-5">
      <Heading title="Manage All Supplies" />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border-b border-gray-300 text-left">
                Title
              </th>
              <th className="py-2 px-4 border-b border-gray-300 text-left">
                Category
              </th>
              <th className="py-2 px-4 border-b border-gray-300 text-left">
                Amount
              </th>
              <th className="py-2 px-4 border-b border-gray-300 text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {supplies.map((supply) => (
              <tr key={supply.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b border-gray-300">
                  {supply.title}
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  {supply.category}
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  {supply.amount}
                </td>
                <td className="py-2 lg:space-x-2 px-4 border-b border-gray-300">
                  <button
                    onClick={() => handleDelete(supply.id)}
                    className="bg-red-500 hover:bg-red-700 text-white lg:mb-0 mb-2 py-1 px-2 rounded"
                  >
                    Delete
                  </button>
                  <Link
                    to={`/dashboard/edit-supply/${supply.id}`}
                    className="bg-green-500 hover:bg-green-700 text-white py-[6px] px-[18px] rounded"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-10 mb-10 flex justify-center">
        <Link
          to="/dashboard/create-supply"
          className="block bg-gradient-to-r from-[#de76a3] to-[#401d3e] text-white rounded-md uppercase text-center py-2 w-[300px] mx-auto"
        >
          <span className="hover:pl-5 transition-all">Add Supply →</span>
        </Link>
      </div>
    </div>
  );
};

export default DashboardAllSupplies;
