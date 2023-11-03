import { useEffect, useState } from 'react';
import axios from 'axios';

import Apartment from '../components/Apartment';

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
        return <Apartment apartment={apartment} />;
      })}
    </div>
  );
}

export default ApartmentsPage;
