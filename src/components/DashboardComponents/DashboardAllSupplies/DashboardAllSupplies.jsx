import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <div>
      <h1>All Supplies</h1>
      <Link to="/dashboard/create-supply">Add Supply Post</Link>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {supplies.map((supply) => (
            <tr key={supply.id}>
              <td>{supply.title}</td>
              <td>{supply.category}</td>
              <td>{supply.amount}</td>
              <td>
                <button onClick={() => handleDelete(supply.id)}>Delete</button>
                <Link to={`/dashboard/edit-supply/${supply.id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardAllSupplies;
