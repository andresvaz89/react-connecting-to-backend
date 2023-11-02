const { Schema, model } = require('mongoose');

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const apartmentSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    image: {
      type: String
    },
    pricePerDay: {
      type: Number
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true
  }
);

const Apartment = model('Apartment', apartmentSchema);

module.exports = Apartment;
