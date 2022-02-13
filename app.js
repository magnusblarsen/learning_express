const express = require('express');
<<<<<<< HEAD
const expess = require('express');
const res = require('express/lib/response');
const {people} = require('./data')
=======
const { send } = require('express/lib/response');
const app = express();
let {people} = require('./data')
>>>>>>> a928fb2e0d4de2dc9967605ef377b62d73ff9d54

//static assets
app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())


<<<<<<< HEAD
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
})
=======
>>>>>>> a928fb2e0d4de2dc9967605ef377b62d73ff9d54

app.get('/api/people', (req,res)=>{
    res.status(200).json({success:true, data:people})
})

app.post('/api/people',(req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false,msg:'please provide name values'})
    }
    res.status(201).json({success:true,person:name})
})

app.post('/api/postman/people', (req,res)=>{
    const {name} = req.body
    if(!name){
        return res
            .status(400)
            .json({success:false,msg:'please provide name values'})
    }
    res.status(201).json({success:true,data:[...people, name]})
})

app.post('/login', (req,res)=>{
    const {name} = req.body;
    if(name){
        return res.status(200).send(`welcome ${name}`)
    }
    res.status(401).send('Please provide morejeowisjroweijr')

})

app.listen(5000, (req,res)=>{
    console.log('listening on port 5000...');
})

<<<<<<< HEAD
app.put('/api/people/:id', (req,res)=>{
    const {id} = req.params
    const {name} = req.body

    const person = people.find((person)=> person.id === Number(id))

    if(!person){
        return res
            .status(404)
            .json({success:false, msg:`no person with id ${id}`})
    }

    const newPeople = people.map((person) => {
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({success:true,data: newPeople})
})

app.delete('api/people/:id', (req,res)=>{
    const person = people.find((person)=> person.id === Number(req.params.id))
    if(!person){
        return res
            .status(404)
            .json({success:false, msg:`no person with id ${req.params.id}`})
    }


})

app.listen(5000, (req, res) => {
    console.log('Server is listening on port 5000...');
})
=======
>>>>>>> a928fb2e0d4de2dc9967605ef377b62d73ff9d54
