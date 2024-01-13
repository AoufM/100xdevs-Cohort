const mongoose= require('mongoose');
 require('dotenv').config();
 const mongoUrl=process.env.mongoUrl;

mongoose.connect(mongoUrl);

const CardSchema= new  mongoose.Schema({
    id:Number,
    name:String,
    description:String,
    intrests:Array,
    linkedIn:String,
    twitter:String,
    instagram:String,
})

const Card= mongoose.model('Card', CardSchema);

module.exports={
    Card,
}

