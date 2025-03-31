const Product = require('../models/product');

exports.createProduct = (req, res, _) => {
  delete req.body._id;

  const product = new Product({
    ...req.body,
  });

  product
    .save()
    .then(() => res.status(201).json({ message: 'Created successfully' }))
    .catch(err => res.status(400).json({ err }));
}

exports.getAllProducts = (_, res, _) => {
  Product
    .find()
    .then(products => res.status(200).json(products))
    .catch(err => res.status(400).json({ err }))
}

exports.getDetailProduct = (req, res, _) => {
  Product
    .findOne({ _id: req.params.id })
    .then(product => res.status(200).json(product))
    .catch(err => res.status(400).json({ err }));
}

exports.modifyProduct = (req, res, _) => {
  Product
    .updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Modified successfully' }))
    .catch(err => res.status(400).json({ err }));
}

exports.removeProduct = (req, res, _) => {
  Product
    .deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Product removed successfully' }))
    .catch(err => res.status(400).json({ err }));
}