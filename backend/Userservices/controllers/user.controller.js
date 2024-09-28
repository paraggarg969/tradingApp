const user = require("../model/user.model");

const registerUser = async(req,res)=>{
    try{
        console.log("user details",req.body);

        const existingUser = await user.findOne({ email: req.body.email });
        if (existingUser) {
            console.log("User is already registered with this email:", req.body.email);
            return res.send('You are already registered');  
        }

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