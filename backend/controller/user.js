const User = require("../models/User");

exports.register = async (req, res) => {
  try {
    // console.log("hii")
    const { name, email, password, Institute } = req.body;
    let user = await User.findOne({ email });
    if (user)
      return res
        .status(400)
        .send({ success: false, message: "User already exists" });
    user = await User.create({
      name,
      email,
      password,
      avatar: { public_id: "sample_id", url: "sample_url" },
      Institute,
    });

    const token = await user.generateToken(); // Fix: Use user instance here
    const options = {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      httpOnly:true,
    }
    res
      .status(201)
      .cookie("token", token, options)
      .json({
        success: true,
        user,
        token,
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User does not exist",
      });
    }

    const isMatch = await user.matchPassword(password); // Fix: Use user instance here

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid Password!",
      });
    }

    const token = await user.generateToken(); // Fix: Use user instance here
    const options = {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      httpOnly:true,
    }
    res
      .status(200)
      .cookie("token", token, options)
      .json({
        success: true,
        user,
        token,
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
