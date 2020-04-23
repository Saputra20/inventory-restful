require('dotenv').config()
const jwt = require('jsonwebtoken')

exports.auth = (req , res , next) => {
    if(req.get('Authorization')){
        jwt.verify(req.get('Authorization'), process.env.SECRET_KEY, (err, decoded) => {
          if(!err){
            // console.log(decoded)
            next()
          }else{
            res.status(401).send('Unauthorized!')
          }
        });
      }else{
        res.status(400).send('Please provide JWT in the request header! (e.g.) Authorization: <JWT>')
      }
}
