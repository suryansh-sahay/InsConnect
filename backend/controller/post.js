const Post = require("../models/Post");
const User = require("../models/User");

exports.createPost = async (req,res) => {
    try {
        const newPostData = {
            title : req.body.title,
            caption : req.body.caption,
            image:{
                public_id:"req.body.public_id",
                url:"req.body.url"
            },
            likes : 0,
            dislikes : 0,

            // user: req.User._id,
        };
        const post = await Post.create(newPostData);

        // const user = await User.findById(req.User._id);

        // user.posts.push(post._id);

        // await user.save();

        res.status(201).json({
            success:true,
            post,
        })

        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

// exports.deletePost = async(req,res) => {
//     try {
//         const post = await post.findById(req.params.id);

//         if(!post){
//             return res.status(404).json({
//                 success:false,
//                 message: "Post not found"
//             })
//         }

//         if(post.userName.toString() !== req.user._id.toString()){
//             return res.status(401).json({
//                 success : false,
//                 message : "Unauthorized"
//             })
//         }

//         await post.remove();

//         const user = await User.findById(req.user._id);

//         const index = await user.posts.indexOf(req.params.id);

//         user.posts.splice(index,1);

//         await user.save();

//         res.status(201).json({
//             success : true,
//             message : "post deleted",
//         })
//     } catch (error) {
        
//     }
// }

exports.likePost = async (req ,res)=>{
    // console.log(req.params.id)
    try {
        const post = await Post.findById(req.params.id)

        if(!post){
            return res.status(404).json({
                success : false,
                message : "Post not found"
            })
        }

        post.likes +=1;

        await post.save();
        res.status(201).json({
            success : true,
            message: "post liked"
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message:error.message
        })
    }
}
exports.disLikePost = async (req ,res)=>{
    // console.log("req.params");
    try {
        const post = await Post.findById(req.params.id)
        if(!post){
            return res.status(404).json({
                success : false,
                message : "Post not found"
            })
        }

        post.dislikes +=1;

        await post.save();

        res.status(201).json({
            success : true,
            message: "post disliked"
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message:error.message
        })
    }
}

// exports.comment = async (req , res) =>{
//     // console.log("req.params");
//     try {

//         const post = await Post.findById(req.params.id);

//         if(!post){
//             res.status(404).json({
//                 success : false,
//                 message : "post not found",
//             })
//         }

//         const comm = req.body.comment;

//         post.comments.push(req.params.comment);
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message:error.message
//         })
//     }
// }

exports.comment = async (req,res) => {
    const post = await Post.findById(req.params.id);

    if (!post){
        res.status(404).json({
            success : false,
            message : "Post not found",
        })
    }
    const comment = req.body.comment;

    post.comments.push(comment);

    await post.save();
    res.status(201).json({
        success : true,
        message : "commment added successfully",
        comment,
    })

}
exports.getAllPost = async (req,res) => {
    try {
        const allPosts = await Post.find({});
        res.status(201).json({
            success : true,
            allPosts
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message:error.message
        })
    }
}

exports.getPostById = async (req,res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(!post){
            res.status(404).json({
                success : false,
                message : "Post not found",
            })
        }
        // const postdetails = Post.find({post});
        res.status(201).json({
            success : true,
            // postdetails,
            post,
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message:error.message
        })
    }
}
