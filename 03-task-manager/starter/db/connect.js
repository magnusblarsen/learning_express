const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://magnus:wjiLCFkmTtif7yu5@nodeexpressprojects.3sonw.mongodb.net/03-task-manager?retryWrites=true&w=majority';

mongoose
    .connect(connectionString)
    .then(()=>console.log('Connected to the DB'))
    .catch((err)=>console.log(err));