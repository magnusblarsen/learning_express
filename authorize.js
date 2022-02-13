const authorize = (req,res,next)=>{
    console.log('authorize');

    const {user} = req.query;
    if(user === 'magnus'){
        req.user = {name:'magnus', id:3}
        next()
    } else{
        res.status(401).send('no access')
    }
}

module.exports = authorize;