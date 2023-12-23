import todoModel from "../model/todo.js";

const createTodo= async (req,res)=>{
       try {
             
              let {todo}= req.body
             
              if(todo){
                 let todo = await todoModel.create(req.body)
                res.status(201).send({
                    message:" todo created sucessfully",
                    todo
                   
                })  
              }
              else{
                  res.status(400).send({
                     message:"Please fill the todo field"
                  })
              }
             
       } catch (error) {
          console.log(error);
       }
}

const getTodo= async (req,res)=>{

       try {
         let getAllTodo= await todoModel.find({}).sort({_id:-1})
         res.status(200).send({
            message:"All Todo List Fetched" ,
            getAllTodo 
         })
       } catch (error) {
          console.log(error);
       }
}

const handleCheckbox=async (req,res)=>{
         
         try {
            let {id}= req.params;

            let toggleStatus= await todoModel.findById({_id:id});

               if(toggleStatus.status){
                      toggleStatus.status="false"
               }
               else{
                  toggleStatus.status="true"
               }

                 await toggleStatus.save();

                 res.status(200).send({
                      message:"toggle changed sucessfully",
                      status:toggleStatus.status
                 })
            } catch (error) {
               console.log(error);
            }
}

const handleDelete= async(req,res)=>{
    try {
      let {id}= req.params;
        
        let deleteItem= await todoModel.findById({_id:id});
           
           if(deleteItem){
                  
                 let deleteTodo= await todoModel.deleteOne({_id:id})

                   res.status(200).send({
                       message:"Todo deleted sucessfully",
                       deleteTodo
                   })
           }

    } catch (error) {
        console.log(error);
    }

}

export default {
       createTodo,
       getTodo,
       handleCheckbox,
       handleDelete
}