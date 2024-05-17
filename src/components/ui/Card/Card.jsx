/* eslint-disable react/prop-types */
import "../../ui/Card/Card.css";
const Card = ({ item }) => {
  return (
    <div className="card-container">
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
        <a href="#" className="button">
          Read More →
        </a>
      </div>
    </div>
  );
};

export default Card;
