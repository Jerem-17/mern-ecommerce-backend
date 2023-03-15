import bcrypt from "bcrypt";
import Order from "../models/Order.js";

/* CREATE */
export const createOrder = async (req, res) => {
  const newOrder = new Order(req.body);

  try {
  } catch (err) {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedObject);
    res.status(500).json({ error: err.message });
  }
};

/* READ */
export const getOne = async (req, res) => {
  try {
    const Order = await Order.findById(req.params.id);

    res.status(200).json(Order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAll = async (req, res) => {
  const queryNew = req.query.new;
  const queryCat = req.query.category;
  try {
    let Orders;

    if (queryNew) {
      Orders = await Order.finf().sort({ createdAt: -1 }).limit(5);
    } else if (queryCat) {
      Orders = await Order.find({
        categories: {
          $in: [queryCat],
        },
      });
    } else {
      Orders = await Order.find();
    }

    res.status(200).json(Orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* UPDATE */
export const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json({ errot: err.message });
  }
};

/* DELETE */
export const deleteOrder = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Product has been deleted..." });
  } catch (err) {
    res.status(500).json({ errot: err.message });
  }
};
