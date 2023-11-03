import { Link } from 'react-router-dom';

const Apartment = (props) => {
  const { apartment } = props;
  return (
    <div key={apartment._id}>
      <h3>
        <Link to={`apartments/${apartment._id}`}>{apartment.title}</Link>
      </h3>
      <img src={apartment.img} alt="apartment" />
      <p>Price: {apartment.pricePerDay} €</p>
    </div>
  );
};

export default Apartment;
