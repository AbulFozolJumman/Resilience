/* eslint-disable react/prop-types */
import { useState } from "react";
import "../../ui/Card/Card.css";
const Card = ({ item }) => {
  // Add event item Modal function
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card-container relative">
      <div className="image-container">
        <img src={item?.image} alt={item?.title} />
      </div>
      <div className="meta-container">
        <h2 className="title"> {item?.title}</h2>
        <div className="button-container">
          <p className="button2">{item.amount}</p>
        </div>
        <div className="button-container">
          <p className="button3">{item.category}</p>
        </div>
      </div>
      <div className="button-container">
        <button className="button" onClick={handleOpenModal}>
          Read More →
        </button>
      </div>

      <div>
        {isModalOpen && (
          <div className="absolute bottom-0 inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-3 rounded shadow-lg w-[90%]">
              <p className="text-lg mb-4 text-left">{item.description}</p>
              <button
                onClick={handleCloseModal}
                className="px-4 text-center py-1 bg-gradient-to-r from-[#00ff35] to-[#0091a7] text-white rounded"
              >
                Okay
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
