import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Heading from "../../ui/Heading";

const DashboardAllSupplies = () => {
  const [supplies, setSupplies] = useState([]);

  useEffect(() => {
    fetch("supplies.json")
      .then((response) => response.json())
      .then((data) => setSupplies(data));
  }, []);

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
      <div className="mb-4">
        <Link
          to="/dashboard/create-supply"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Supply Post
        </Link>
      </div>
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
                    className="bg-green-500 hover:bg-green-700 text-white py-1 px-[18px] rounded"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardAllSupplies;
