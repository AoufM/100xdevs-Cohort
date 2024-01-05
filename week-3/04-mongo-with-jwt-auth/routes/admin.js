const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course, User } = require("../db/index");
const router = Router()
const jwt= require('jsonwebtoken');
const { JWT_SECRET } = require("..");

// Admin Routes
router.post('/signup',async (req, res) => {
    
    try {
		const { username, password } = req.body;
        await Admin.create({
            username,
            password,
        });

		res.status(201).json({ message: "Admin created successfully" });
	} catch (error) {
		res.status(500).json({ message: "Could not create admin" });
	}
});

router.post('/signin', async (req,res)=>{
    const {username,password}= req.body;

    const isValidated= await User.find({
        username,
        password
    })
    if(user){

    jwt.sign({
        username
    },JWT_SECRET);
    res.json({
        token
    })}
    else{
        res.status(404).json({
            msg: 'Incorrect email and password'
        })
    }
})
 

router.post('/courses', adminMiddleware,async (req, res) => {
    const courseId= Math.floor(Math.random()*10000000);
    await Course.create({
        id: courseId,
        title:req.body.title,
        description: req.body.description,
        price:req.body.price,
        imageLink:req.body.imageLink,
        published:req.body.published,
    })
    res.json({
        message:`Course created: ${courseId}`
    })
});

router.get('/courses', adminMiddleware,async (req, res) => {
   const response=  await Course.find({});
   res.json({
    courses: response,
   })
});

module.exports = router;