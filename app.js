const expess = require('express');
const res = require('express/lib/response');
const {products} = require('./data')


const app = expess();

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

app.listen(5000, (req, res) => {
    console.log('Server is listening on port 5000...');
})