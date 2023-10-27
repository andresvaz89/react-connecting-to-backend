import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddApartmentPage() {
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [price, setPrice] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('https://ironbnb-m3.herokuapp.com/apartments', {
        title,
        img,
        pricePerDay: price
      })
      .then(() => navigate('/'));
  };

  return (
    <div className="AddApartmentPage">
      <h3>Add New Apartment</h3>

      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          onChange={(event) => setTitle(event.target.value)}
        />
        <label>Image</label>
        <input
          type="text"
          name="img"
          onChange={(event) => setImg(event.target.value)}
        />

        <label>Price per Day</label>
        <input
          type="text"
          name="pricePerDay"
          onChange={(event) => setPrice(Number(event.target.value))}
        />

        <button type="submit">Create Apartment</button>
      </form>
    </div>
  );
}

export default AddApartmentPage;
