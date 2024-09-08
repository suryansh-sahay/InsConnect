const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name"],
    unique : [true,"please select unique username"]
  },
  avatar: {
    public_id: String,
    url: String,
  },
  email: {
    type: String,
    required: [true, "Please enter Email!!"],
    unique: [true, "Email already exists"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [8, "Password must be of 8 charachters"],
    select: false,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  Institute:{
    type:String,
    required:[true,"Institute field is empty"]
  }
});
userSchema.pre("save", async function (next) {
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10);
    }

    next();
});

userSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password,this.password);
}

userSchema.methods.generateToken = async function(){
    return jwt.sign({_id:this._id},process.env.JWT_SECRET)
}

module.exports = mongoose.model("User", userSchema);
