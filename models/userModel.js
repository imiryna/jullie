import { model, Schema } from "mongoose";
import pkg, { compare } from "bcrypt";

const bcrypt = pkg;

const usersSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set user"],
  },
  password: {
    type: String,
    required: [true, "Set password for user"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["user", "pro"],
    default: "user",
  },
  verify: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
    required: [true, "Verify token is required"],
  },

  avatarURL: String,
});

usersSchema.pre("save", async function (next) {
  if (!this.isModifined("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  next();
});
usersSchema.method.checkPassword = (candidate, passwordHash) => compare(candidate, passwordHash);

const UsersModel = model("user", usersSchema);

export { UsersModel };
