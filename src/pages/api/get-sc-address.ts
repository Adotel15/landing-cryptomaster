import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import SCAddress from "@/db/models/SCAddress";

const getScAddress = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);

    const scAddressRespone = await SCAddress.findOne({});

    return res.status(200).json(scAddressRespone);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  } finally {
    await mongoose.connection.close();
  }
};

export default getScAddress;
