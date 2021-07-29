import { Schema } from "mongoose";
import { ItemStatus } from "./item.dto";

export const ITEM_SCHEMA_ID = 'item';

export const ItemSchema = new Schema({
    name: String,
    title: String,
    status: {
        type: Number,
        enum: ItemStatus,
        default: ItemStatus.Active
    }
});

ItemSchema.set('toJSON', {
    virtuals: true,
    versionKey:false,
    transform: function (doc, ret) {   delete ret._id  }
  });

export interface IItem {
    id: string;
    name: string;
    title?: string;
    status: number;
}