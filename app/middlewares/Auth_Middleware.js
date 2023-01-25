const authValid = (req, res, next) =>{
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {
            const bearerToken = bearerHeader.split(" ")[1];
            req.token = bearerToken;
            next();
    }else{
        res.json({
            code:403,
            msg:"Access denied"
        })
    }
    
}


module.exports =[
    authValid
]