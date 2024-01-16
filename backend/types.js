const zod=require("zod")

//for adding todo .post("/todo"
const createTodo = zod.object({
  title: zod.string(),
  description: zod.string(),
});

//for completing todo .put("/completed"
const updateTodo = zod.object({
    id:zod.string(),
})

module.exports={
    createTodo:createTodo,
    updateTodo:updateTodo
}