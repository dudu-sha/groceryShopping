const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ItemSchema = new Schema({
    product:{
        type:String,
        required: true
    },
    cls:{
        type:String,
        required:true
    },
    Price:{
        type:Number,
        required:true
    }
});
module.exports=Item=mongoose.model('item',ItemSchema);