const userCrtl={};
const UserModel=require("../models/User");

userCrtl.getUsers=async(req,res)=>{
    const users=await UserModel.find();
    res.json(users);
}

userCrtl.createUsers=async(req,res)=>{
    const {username}=req.body;
    const newUser=new UserModel({username});

    await newUser.save();
    res.json(newUser);

    res.send("Create user")
}

userCrtl.deleteUsers=async(req,res)=>{
    await UserModel.findByIdAndDelete(req.params.id)
    res.send("delete users")
}

module.exports=userCrtl;