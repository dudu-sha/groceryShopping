const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

const User = require("../../models/user");
const auth = require("../../middleware/auth");

router.post("/", (req, res) => {
  console.log("got here too")
  const { email, password } = req.body;
  if (!email || !password) {
    console.log( "please enter all fields")
    return res.status(400).json({ msg: "please enter all fields" });
   
  }
  User.findOne({ email }).then((user) => {
    
    if (!user) { console.log( "user doesnt exists");return res.status(400).json({ msg: "user doesnt exist" });}

    bcrypt.compare(password, user.password).then((isfound) => {
      
      if (!isfound) return res.status(400).json({ msg: "invalid credentials" });
      jwt.sign({ id: user.id }, config.get("jwtSecret"), (err, token) => {
        if (err) throw err;
        res.json({
          token,
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
          },
        });
      });
    });
  });
});
router.get("/user", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => res.json(user));
});

module.exports = router;
