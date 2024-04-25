const express = require('express')
const router = express.Router();
const post = require('../Model/post');

router.use(express.json());


//To add blog
router.post('/addblog',(req,res)=>{
    const blog = req.body;
    try {
        const data = post(blog).save();
        res.status(200).json({message:"Blog Added"})
    } catch (error) {
        console.log(error);
        res.json({message:"unable to add blog"})
    }
})

//to view all blogs
router.get('/viewall',async(req,res)=>{
    try {
        const data = await post.find();
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
})

//to update blog
router.put("/edit/:id",async(req,res)=>{
    const postId = req.params.id;
    const item = req.body;
    try {
        const data = await post.findByIdAndUpdate({_id:postId},item);
        res.status(200).send({message:"Blog Updated",blog});
    } catch (error) {
        res.status(404).send({message:"No Blog found"})
    }
})


//to delete blog
router.delete('/del/:id',async(req,res)=>{
    const postId = req.params.id;
    try{ 
         const data = await post.findByIdAndDelete({_id:postId},);
         res.status(200).send({message:"Blog Deleted"});
    } catch(error){
        res.status(404).send({message:"No Blog found"})
    } 
    
})


module.exports = router;