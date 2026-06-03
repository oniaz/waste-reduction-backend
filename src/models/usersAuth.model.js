import mongoose from "mongoose";
import bcrypt from "bcrypt";
const usersAuthSchema = new mongoose.Schema({
   username: {
      type: String,
      required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ["customer", "vendor", "admin"]
    },
    accountStatus: {
        type: String,
        required: true,
        enum: ["active", "pending", "suspended"],
        default: "active"
    }}, { timestamps: true });
usersAuthSchema.pre("save", async function() {
    if (!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password, 10);
});
const UsersAuth = mongoose.model("UsersAuth", usersAuthSchema);
export default UsersAuth;