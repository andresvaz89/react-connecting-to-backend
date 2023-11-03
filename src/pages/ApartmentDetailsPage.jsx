import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Apartment from '../components/Apartment';

const ApartmentDetailsPage = () => {
  const [apartment, setApartment] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://ironbnb-m3.herokuapp.com/apartments/${id}`)
      .then((response) => setApartment(response.data));
  });

  if (Object.keys(apartment).length === 0) {
    return <p>Loading...</p>;
  }

  return <Apartment apartment={apartment} />;
};

export default ApartmentDetailsPage;
