const user = require("../model/user.model").user;

const registerUser = async(req,res)=>{
    try{
        console.log("user details",req.body);
        let userData = user({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })

        await userData.save()
        res.send('User registered!!');
    }
    catch(err){
        res.send("something went wrong");
    }
}

const getUser = async(req,res) => {
    try{
        user.find({})
            .then(data => req.send(data))
            .catch(err => res.send('something went wrong'))

        }
    catch(err){
        console.log(err);
        res.send('ERR');
    }
}

module.exports = {registerUser,getUser};