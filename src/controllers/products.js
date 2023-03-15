import bcrypt from "bcrypt";
import Product from "../models/Product.js";

/* CREATE */
export const createProduct = async (req, res) => {
  const newProduct = new Product(req.body);

  try {
  } catch (err) {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
    res.status(500).json({ error: err.message });
  }
};

/* READ */
export const getOne = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAll = async (req, res) => {
  const queryNew = req.query.new;
  const queryCat = req.query.category;
  try {
    let products;

    if (queryNew) {
      products = await Product.finf().sort({ createdAt: -1 }).limit(5);
    } else if (queryCat) {
      products = await Product.find({
        categories: {
          $in: [queryCat],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* UPDATE */
export const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json({ errot: err.message });
  }
};

/* DELETE */
export const deleteProduct = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Product has been deleted..." });
  } catch (err) {
    res.status(500).json({ errot: err.message });
  }
};
