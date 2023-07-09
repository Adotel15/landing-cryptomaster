// import type { NextApiRequest, NextApiResponse } from "next";
// import mongoose from "mongoose";
// import SCAddress from "@/db/models/SCAddress";

// const changeScAddress = async (req: NextApiRequest, res: NextApiResponse) => {
//   const { address } = req.body;

//   if (!address) {
//     return res.status(400).json({ error: "Address is required" });
//   }

//   try {
//     await mongoose.connect(process.env.MONGO_URI as string);

//     const scAddress = await SCAddress.findOne({});

//     if (scAddress) await SCAddress.deleteMany();

//     const newScAddress = new SCAddress({ address });
//     await newScAddress.save();

//     return res.status(200).json({ message: "SC address updated" });
//   } catch (error) {
//     return res.status(500).json({ message: "Internal server error" });
//   } finally {
//     await mongoose.connection.close();
//   }
// };

// export default changeScAddress;
