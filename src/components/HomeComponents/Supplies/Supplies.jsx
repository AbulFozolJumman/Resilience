import { useEffect, useState } from "react";
import Card from "../../ui/Card/Card";
import { Link } from "react-router-dom";
import Heading from "../../ui/Heading";
import Loader from "../../ui/Loader/Loader";

const Supplies = () => {
  const [data, setData] = useState(null);
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
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="md:py-20 py-10">
      <Heading title="Our Supplies" />
      <div className="flex flex-wrap justify-center items-center md:gap-10 gap-5 mx-auto max-w-[1440px] px-5 md:px-0">
        {data?.map((item) => (
          <>
            <Card item={item} key={item.id} />
          </>
        ))}
      </div>
      <Link
        to="/supplies"
        className="block bg-gradient-to-r from-[#de76a3] to-[#401d3e] text-white rounded-md uppercase mt-10 text-center py-2 w-[300px] mx-auto"
      >
        <span className="hover:pl-5 transition-all">View All Supplies →</span>
      </Link>
    </div>
  );
};

export default Supplies;
