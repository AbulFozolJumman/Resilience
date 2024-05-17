import { useEffect, useState } from "react";
import Card from "../../components/ui/Card/Card";

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
    <div className="md:py-20 py-10">
      <div className="flex justify-center items-center gap-5 md:mb-10 mb-5">
        <hr className="w-20 border-2 border-[#DE76A3]" />
        <h2 className="md:text-4xl text-2xl font-bold  text-[#401D3E]">
          ALL SUPPLIES
        </h2>
        <hr className="w-20 border-2 border-[#DE76A3]" />
      </div>
      <div className="flex flex-wrap justify-center items-center md:gap-10 gap-5 mx-auto max-w-[1440px] px-5 md:px-0">
        {data.map((item, index) => (
          <>
            <Card item={item} key={index} />
          </>
        ))}
      </div>
    </div>
  );
};

export default AllSupplies;
