import mongoose from "mongoose";
const customersSchema = new mongoose.Schema({
   email: {
      type: String,
      required: true,
        unique: true, //on the level of customers, email should be unique
   },
    name: {
       firstName: {
          type: String,
          required: true,
         },
        lastName: {
          type: String,
          required: true,
            }
    },
    address: {
        governorate: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        neighborhood: {
            type: String,
            required: true,
        },
        detailedAddress: {
            type: String,
            required: true,
        }
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    loyaltyPoints: {
        type: Number,
        default: 0,
    },
    authId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UsersAuth",
        required: true
    }
}   , { timestamps: true });
const Customers = mongoose.model("Customers", customersSchema);
export default Customers;