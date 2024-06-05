import { useEffect, useState } from "react";
import Card from "../../components/ui/Card/Card";
import Heading from "../../components/ui/Heading";
import Loader from "../../components/ui/Loader/Loader";

const AllSupplies = () => {
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
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div className="md:py-20 py-10 min-h-screen">
      <Heading title="All Supplies" />
      <div className="flex flex-wrap justify-center items-center md:gap-10 gap-5 mx-auto max-w-[1440px] px-5 md:px-0">
        {data?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default AllSupplies;
