

const getAllTasks = (req,res) => {
    res.status(200).json({success:true})
}

const createTask = (req,res) => {
    res.json(req.body);
}

const getTask = (req,res)=> {
    res.send(`sending item for id ${req.params.id}`)
}
const updateTask = (req,res)=>{
    res.send(`updating item ${req.params.id}`)
} 
const deleteTask = (req,res)=>{
    res.send(`deleting task ${req.params.id}`)
}

// app.get('/api/v1/tasks')
// app.post('/api/v1/tasks')
// app.get('/api/v1/tasks/:id')
// app.patch('/api/v1/tasks/:id')
// app.delete('/api/v1/tasks/:id')

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}