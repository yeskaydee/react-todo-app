const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://yeskaydee:NryvaYa44CbvzqGL@cluster0.dgzxcyv.mongodb.net/todos")
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model('todos',todoSchema);

module.exports={
    todo
}