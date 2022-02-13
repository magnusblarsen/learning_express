const express = require('express');
const expess = require('express');
const res = require('express/lib/response');
const {people} = require('./data')


const app = expess();

app.use(express.json())

app.get('/', (req, res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
})

app.get('/api/products', (req,res)=>{
    const productsMinusDescription = products.map((product)=>{
        const {id, name, image} = product;
        return {id,name,image};
    })
    
    res.json(productsMinusDescription)
})

app.get('/api/products/:productID', (req,res)=>{
    //console.log(req.params);

    const {productID} = req.params;

    const singleProduct = products.find(
        (product)=> product.id === Number(productID));
    
    if(!singleProduct){
        
        return res.status(404).send('product does not exist')
    }

    return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req,res)=>{
    console.log(req.params);
    res.send('hello')

})

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