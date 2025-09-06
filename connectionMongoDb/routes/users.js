const express = require('express');
// const app = express();
const router = express.Router();
const User = require('../models/dbschema')

//routes

//CRUD Opreations

//View/Read
router.get('/users', async(req,res)=>{
    try {
        const users = await User.find();
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

// creation
router.post('/users', async (req,res)=>{
    try {
        const {name,age} = req.body;
        const newUser = new User({name,age}); 
        await newUser.save();
        console.log('response');
        res.status(200).json({
            success:true,
            user: newUser
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message: error.message
        })
    }
})

//Update

router.put('/users/:id', async (req,res)=>{
        const {id} = req.params;
        const {name,age} = req.body;
    try {
        const updateUser = await User.findByIdAndUpdate(id,{name,age}, { new: true } ) ;
        if (!updateUser) {
            return res.status(404).json({ message: 'User may not be in the DB' });
        }
        res.status(200).json({
            sucess:true,
            user : updateUser
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message: error.message
        })
    }
})

router.delete('/users/:id', async(req,res)=>{
    const {id} = req.params;
    try {
        const UserDelete = await User.findByIdAndDelete(id)
        if (!UserDelete) {
            res.json('user not found')
        }
        res.status(200).json({
            sucess: true,
            user: UserDelete,
            message: 'User Deleted' 
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message 
        })
    }
})



module.exports = router;