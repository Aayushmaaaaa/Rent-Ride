// const Kyc = require("../models/kycModel");

// const submitKyc = async (req, res) => {
//   try {
//     const { fullName, phoneNumber } = req.body;

//     if (!fullName || !phoneNumber) {
//       return res
//         .status(400)
//         .json({ message: "Full name and phone number are required" });
//     }

//     const licenseImagePath = req.file ? `/uploads/${req.file.filename}` : null;

//     const newKyc = new Kyc({ fullName, phoneNumber, licenseImagePath });

//     await newKyc.save();
//     res
//       .status(201)
//       .json({ message: "KYC submitted successfully", kyc: newKyc });
//   } catch (err) {
//     console.error("KYC Submission Error:", err);
//     res
//       .status(500)
//       .json({ message: "Error submitting KYC", error: err.message });
//   }
// };

// module.exports = { submitKyc };

const Kyc = require("../models/kycModel");

const submitKyc = async (req, res) => {
  try {
    const { fullName, phoneNumber } = req.body;

    if (!fullName || !phoneNumber) {
      return res
        .status(400)
        .json({ message: "Full name and phone number are required" });
    }

    const licenseImagePath = req.file ? `/uploads/${req.file.filename}` : null;

    const newKyc = new Kyc({ fullName, phoneNumber, licenseImagePath });

    await newKyc.save();
    res
      .status(201)
      .json({ message: "KYC submitted successfully", kyc: newKyc });
  } catch (err) {
    console.error("KYC Submission Error:", err);
    res
      .status(500)
      .json({ message: "Error submitting KYC", error: err.message });
  }
};

const getAllKyc = async (req, res) => {
  try {
    const kycs = await Kyc.find().sort({ createdAt: -1 });
    res.status(200).json(kycs);
  } catch (err) {
    console.error("Error fetching KYC submissions:", err);
    res
      .status(500)
      .json({ message: "Error fetching KYC submissions", error: err.message });
  }
};

const updateKycStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!["approved", "rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const kyc = await Kyc.findByIdAndUpdate(id, { status }, { new: true });

    if (!kyc) {
      return res.status(404).json({ message: "KYC submission not found" });
    }

    res.status(200).json({ message: "KYC status updated successfully", kyc });
  } catch (err) {
    console.error("Error updating KYC status:", err);
    res
      .status(500)
      .json({ message: "Error updating KYC status", error: err.message });
  }
};

module.exports = { submitKyc, getAllKyc, updateKycStatus };
