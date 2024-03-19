const router = require("express").Router()
const Post = require("../models/Post")

//create post
router.post("/", async(req, res) => {
    const newPost = new Post(req.body)
    
    
    try{
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
    }
    catch(err){
        res.status(500).json(err)
        console.log(err)
    }
})

//update post
router.put("/:id", async (req, res) => {
    try{
        const post = await Post.findById(req.params.id)
        if(post.username === req.body.username){
            try{
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set : req.body
                }, {new: true})
                res.status(200).json(updatedPost)
            }
            catch(err){
                res.status(500).json(err)
            }
        }
        else{
            res.status(401).json("You can update only your post")
        }
    }
    catch(err){
        res.status(500).json(err)
    }
})

//delete post
router.delete("/:id", async (req, res) => {
   
    try{
        const post = await Post.findById(req.params.id)
        
        if(!post){
             return res.status(404).json("Post Not found")
        }
        if(post.username === req.body.username){
            try{
               await Post.findByIdAndDelete(req.params.id)
               return res.status(200).json("Post deleted Successfully")
            }
            catch(err){
                return res.status(500).json(err)
            }
        }
        else{
            return res.status(401).json("You can delete only your post")
        }
    }
    catch(err){
        return res.status(500).json(err)
    }
})

//get post
router.get("/:id",async (req, res) => {
    try{
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//get all post
// get all posts
router.get("/", async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
        let posts;
        if (username) {
            posts = await Post.find({ username }).sort({ createdAt: -1 });
        } else if (catName) {
            posts = await Post.find({ categories: { $in: [catName] } }).sort({ createdAt: -1 });
        } else {
            posts = await Post.find().sort({ createdAt: -1 });
        }
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});


module.exports = router;