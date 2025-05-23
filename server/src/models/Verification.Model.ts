// models/Verification.ts
import { Schema, model } from 'mongoose';

const verificationSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    idCardImage: {
      type: String, // file path or cloud URL
      required: true,
    },
    status: {
      type: String,
      enum: ['Pending', 'Approved', 'Not Submitted', 'Rejected'],
      default: 'Not Submitted',
    },
    rejectionReason: {
      type: String,
    },
    approvedBy: {
      type: Schema.Types.ObjectId,
      ref: 'Admin',
    },
  },
  {
    timestamps: true,
  },
);

export const VerificationModel = model('Verification', verificationSchema);
