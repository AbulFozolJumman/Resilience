import { useEffect, useState } from "react";
import SupplyCard from "../../components/ui/SupplyCard";

const AllSupplies = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("supplies.json") // Replace with your actual JSON file path
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div className="md:mt-20 mt-10">
      <div className="flex justify-center items-center gap-5 mb-8">
        <hr className="w-20 border-2 border-[#DE76A3]" />
        <h2 className="text-4xl font-bold  text-[#401D3E]">ALL SUPPLIES</h2>
        <hr className="w-20 border-2 border-[#DE76A3]" />
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mx-auto max-w-[1440px] px-5 md:px-0">
        {data.map((item, index) => (
          <>
            <SupplyCard item={item} key={index} />
          </>
        ))}
      </div>
    </div>
  );
};

export default AllSupplies;
