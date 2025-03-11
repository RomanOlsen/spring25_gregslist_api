import { Schema } from "mongoose";


export const HouseSchema = new Schema(
  {
    // house stats
    bedrooms: { type: Number, min: 0, max: 30, required: true },
    bathrooms: { type: Number, min: 0, max: 25, required: true },
    levels: { type: Number, min: 1, max: 4, required: true },
    price: { type: Number, min: 0, max: 10000000, required: true }, // 10M
    imgUrl: { type: String, minLength: 0, maxLength: 500, required: true },
    description: { type: String, minLength: 0, maxLength: 500 },
    year: { type: Number, min: 1000, max: 2025, required: true },
    //creatorId: { type: Object }
    creatorId: { type: Schema.ObjectId, required: true, ref: 'Account' }

  },
  // creator
  { timestamps: true, toJSON: { virtuals: true } }


);