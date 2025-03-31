const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  id: { type: Number, required: true },
  code: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  internalReference: { type: String, required: true },
  shellId: { type: Number, required: true },
  inventoryStatus: { type: "INSTOCK" | "LOWSTOCK" | "OUTOFSTOCK", required: true },
  rating: { type: Number, required: true },
  createdAt: { type: Number, required: true },
  updatedAt: { type: Number, required: true },
});

module.exports = mongoose.model('Product', productSchema);