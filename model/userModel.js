const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
  {
    username: {
        type: String,
        required: [true, "Please add the username"],
    },
    email: {
        type: String,
        required: [true, "Please add the contact email address"],
        unique : [true, "email id has already register"]
      },
    password: {
        type: String,
        required: [true, "Please add the contact password"],
      },
},{
    timestamps: true,
}
)

module.exports = mongoose.model("users1", userSchema);