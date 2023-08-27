import { mongoose } from "mongoose";

// Declare the Schema of the Mongo model
const DataSchema = new mongoose.Schema({
    username: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    password: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
});

const Data = mongoose.models.datas || mongoose.model('datas', DataSchema);
export default Data;