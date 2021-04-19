
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const detailsSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   roll_no: Number,
   address: String,
   phone: Number
})

const detailsModel = mongoose.model('details', detailsSchema, 'details');
export default detailsModel;
