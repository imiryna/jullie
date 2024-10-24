import { model, Schema } from "mongoose";
import crypto from "crypto";
import pkg from "bcrypt";

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
    //required: [true, "Verify token is required"],
  },

  avatarURL: String,
});

usersSchema.pre("save", async function (next) {
  if (this.isNew) {
    const emailHash = crypto.createHash("md5").update(this.email).digest("hex");
  }
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  next();
});
const checkPassword = (candidate, passwordHash) => {
  const a = bcrypt.compare(candidate, passwordHash);
  return a;
};

usersSchema.static({
  checkPassword: checkPassword,
});

const UsersModel = model("user", usersSchema);

export { UsersModel };
