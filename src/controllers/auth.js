import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

/* REGISTER */
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = bcrypt.hash(password, salt);

    const newUser = {
      username,
      email,
      password: passwordHash,
    };

    const savedUser = await newUser.save();

    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* LOGIN */
export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(400).json({ error: "User does not exist" });

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    !isMatch && res.status(400).json({ error: "Wrong credentials..." });

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    const { password, ...info } = user._doc;
    res.status(201).json({...info, accessToken});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
