import mongoose from "mongoose";
import type { Model } from "mongoose";

interface ISCAddress extends Document {
  address: string;
}

const SCAddressSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
});

let SCAddress: Model<ISCAddress>;

try {
  SCAddress = mongoose.model<ISCAddress>("SCAddress");
} catch (error) {
  SCAddress = mongoose.model<ISCAddress>("SCAddress", SCAddressSchema);
}

export default SCAddress;
