import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");
    !token && res.status(403).send("Access denied");

    token.startsWith("Bearer ") && token.slice(7, token.length).trimLeft();

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    req.user.id === req.params.id || req.user.isAdmin
      ? next()
      : res.status(403).json({ error: "You are not allowed to do that !.." });
  });
};


export const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    req.user.isAdmin
      ? next()
      : res.status(403).json({ error: "You are not allowed to do that !.." });
  });
};
