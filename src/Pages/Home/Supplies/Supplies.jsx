import { useEffect, useState } from "react";
import Card from "../../../components/ui/Card/Card";
import { Link } from "react-router-dom";

const Supplies = () => {
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
        setData(jsonData.slice(0, 6));
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
      <div className="flex justify-center items-center gap-2 md:gap-5 md:mb-10 mb-5">
        <hr className="md:w-20 w-12 border-2 border-[#DE76A3]" />
        <h2 className="md:text-4xl text-2xl font-bold  text-[#401D3E]">
          OUR SUPPLIES
        </h2>
        <hr className="md:w-20 w-12 border-2 border-[#DE76A3]" />
      </div>
      <div className="flex flex-wrap justify-center items-center md:gap-10 gap-5 mx-auto max-w-[1440px] px-5 md:px-0">
        {data?.map((item) => (
          <>
            <Card item={item} key={item.id} />
          </>
        ))}
      </div>
      <Link
        to="/supplies"
        className="block bg-gradient-to-r from-[#de76a3] to-[#401d3e] text-white font-bold rounded-md uppercase mt-10 text-center py-2 w-[300px] mx-auto"
      >
        <span className="hover:pl-5 transition-all">View All Supplies →</span>
      </Link>
    </div>
  );
};

export default Supplies;
