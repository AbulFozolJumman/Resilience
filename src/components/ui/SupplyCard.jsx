/* eslint-disable react/prop-types */
const SupplyCard = ({ item }) => {
  return (
    <div className="bg-gray-50 w-full max-w-[400px] mx-auto">
      {item.title}
      <img src={item.image} alt={item.title} />
    </div>
  );
};

export default SupplyCard;
