const { required } = require('joi');
const mongoose = require('mongoose');

const labSchema = new mongoose.Schema(
    {
        lab_name: {
            type: String,
            required: true,
        },
        email: {
            type:String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        
    },
    {
        timestamps: true,
    }
);

const Lab = mongoose.model("lab", labSchema);

module.exports = Lab;