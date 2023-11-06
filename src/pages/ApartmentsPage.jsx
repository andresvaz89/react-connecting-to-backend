import { useState, useEffect } from 'react';
import axios from 'axios';
import Apartment from '../components/Apartment';

function ApartmentsPage() {
  const [apartments, setApartments] = useState([]); // step 1 lifecycle --> initialize state variables

  useEffect(() => {
    // step 3 lifecycle --> execute what's in the callback function
    axios
      .get('http://localhost:5005/apartments')
      .then((response) => setApartments(response.data));
  }, []);

  return (
    //step 2 lifecycle --> render what's in the return statement
    <div>
      <h3>List of apartments</h3>
      <br />
      {apartments.map((apartment) => {
        return <Apartment apartment={apartment} key={apartment._id} />;
      })}
    </div>
  );
}

export default ApartmentsPage;
