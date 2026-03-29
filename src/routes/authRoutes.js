const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;


// SIGNUP

router.post("/signup", async (req, res) => {

 const { username, email, password } = req.body;

 try {

  const existingEmail = await User.findOne({ email });

  if (existingEmail) {

   return res.status(400).json({

    message: "Email already registered"

   });

  }

  const existingUsername = await User.findOne({ username });

  if (existingUsername) {

   return res.status(400).json({

    message: "Username already taken"

   });

  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({

   username,
   email,
   password: hashedPassword

  });

  res.json({

   message: "Signup successful"

  });

 } catch (error) {

  res.status(500).json({

   message: error.message

  });

 }

});

// LOGIN

router.post("/login", async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {

        return res.status(400).json({

            message: "User not found"

        });

    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {

        return res.status(400).json({

            message: "Invalid credentials"

        });

    }

    const token = jwt.sign(

        {

            userId: user._id

        },

        JWT_SECRET,

        {

            expiresIn: "1d"

        }

    );

    res.json({

        token

    });

});

module.exports = router;