const router = require('express').Router();

const Apartment = require('../models/Apartment.model');

router.get('/', (req, res, next) => {
  Apartment.find()
    .then((apartments) => res.json(apartments))
    .catch((err) => console.error(err));
});

router.post('/', (req, res) => {
  //const newApartment = req.body;

  Apartment.create(req.body)
    .then((newApartment) => res.json(newApartment))
    .catch((err) => console.error(err));
});

module.exports = router;
