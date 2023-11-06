import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddApartmentPage() {
  const [apartment, setApartment] = useState({});
  // const [title, setTitle] = useState("")
  // const [img, setImg] = useState("")
  // const [price, setPrice] = useState(0)

  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value =
      name !== 'pricePerDay' ? event.target.value : Number(event.target.value);
    setApartment((apartment) => ({ ...apartment, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('http://localhost:5005/apartments', apartment)
      // .then((response) => navigate(`/apartments/${response.data._id}`))
      .then((response) => navigate('/'));
  };
  return (
    <div className="AddApartmentPage">
      <h3>Add New Apartment</h3>
      <br />
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" onChange={handleChange} />
        <input type="text" name="img" onChange={handleChange} />
        <input type="number" name="pricePerDay" onChange={handleChange} />
        <button type="submit">Create apartment</button>
      </form>
    </div>
  );
}

export default AddApartmentPage;
