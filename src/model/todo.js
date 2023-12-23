import mongoose from './index.js';

const todoSchema = new mongoose.Schema({
      todo:{
          type:String,
          required:[true, "todo is required"]
      },
      status:{
         type:Boolean,
         default:false
      },
      createdAt:{
           type:Date,
           default: Date.now()
      }
})

const todoModel = mongoose.model("todos" ,todoSchema);

export default todoModel;