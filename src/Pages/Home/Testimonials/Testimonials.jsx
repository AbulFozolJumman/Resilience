import { useEffect, useState } from "react";
import Heading from "../../../components/Heading";
import Marquee from "react-fast-marquee";
// import quotation from "../../../assets/quotation-marks.png";

const Testimonials = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("testimonials.json")
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
    <div className="max-w-[1440px] mx-auto md:pb-20 pb-10">
      <Heading title="Testimonials" />

      <Marquee pauseOnHover>
        {data?.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-t from-[#9b3561] to-[#401D3E] p-5 mx-2 text-white w-[320px] h-[420px] rounded-md relative"
          >
            <p className="text-lg">{item.testimonial}</p>
            <div className="absolute bottom-5">
              <h3 className="text-2xl font-bold">{item.name}</h3>
              <p>
                {item.title},{" "}
                <span className="font-bold" id="jjj" title={item.organization}>
                  {item.company}
                </span>
              </p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Testimonials;
