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

const getUserById = async (req,res) => {
    try{
        user.findById(req.paras.id)
        .then(data => res.send(data))
        .catch(err => res.send('something went wrong'))
    }
    catch(err){
        console.log(err);
        res.send('ERR');
    }
}

const updateUserById = async(req,res) => {
    try{
        const updateUser = await user.findByIdAndUpdate(
            req.params.id,
            {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            },
            {
                new: true
            }
        )
        if(!updateUser){
            return res.status(404).send("User not found");
        }
        res.send(updateUser);
    }
    catch(err){
        console.log(err);
        res.send('ERR');
    }
}

const deleteUserById = async(req,res) => {
    try{
        const deleteUser = await user.findByIdAndDelete(req.params.id);
        if(!deleteUser){
            return res.status(404).send("User not found");
        }
        res.send('User deleted successfully');
    }
    catch(err){
        console.log(err);
        res.send('ERR');
    }
}

module.exports = {registerUser,getUser,getUserById,updateUserById,deleteUserById};