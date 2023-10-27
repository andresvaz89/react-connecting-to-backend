import { useEffect, useState } from 'react';
import axios from 'axios';

function ApartmentsPage() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    axios
      .get('https://ironbnb-m3.herokuapp.com/apartments')
      .then((response) => setApartments(response.data));
  }, []);

  return (
    <div>
      <h3>List of apartments</h3>
      <br />
      {apartments.map((apartment) => {
        return (
          <div key={apartment._id}>
            <h3>{apartment.title}</h3>
            <img src={apartment.img} alt="apartment" />
            <p>Price: {apartment.pricePerDay} €</p>
          </div>
        );
      })}
    </div>
  );
}

export default ApartmentsPage;
