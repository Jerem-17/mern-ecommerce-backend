import bcrypt from "bcrypt";
import Cart from "../models/Cart.js";

/* CREATE */
export const createCart = async (req, res) => {
  const newCart = new Cart(req.body);

  try {
  } catch (err) {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
    res.status(500).json({ error: err.message });
  }
};

/* READ */
export const getOne = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);

    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAll = async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* UPDATE */
export const updateCart = async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json({ errot: err.message });
  }
};

/* DELETE */
export const deleteCart = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Cart has been deleted..." });
  } catch (err) {
    res.status(500).json({ errot: err.message });
  }
};
