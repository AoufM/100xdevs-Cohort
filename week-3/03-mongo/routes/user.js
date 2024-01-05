const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    try{
    const username= req.body.username;
    const password= req.body.password;
   await User.create({
        username,
        password
    })
    res.status(200).send('User created succefully');
}
catch(e){
    res.status(404).send(e.message);
}

});

router.get('/courses', async (req, res) => {
  const response =await Course.find({
    published:true,
  });
  res.json({
    courses_available: response,
  })
      
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId=req.params.courseId;
    const username= req.headers.username;
    const purchaseCourse= await Course.findOne({courseId})
    try{
   await User.findOneAndUpdate({
        username:username
    },{
       "$push":{
        purchasedCourses: purchaseCourse
       }
    })
    res.json({messsage:'Course purchased succesfully'});
}
catch(error){
    res.status(404).send(error.message)
}
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user= await User.findOne({
        username:req.headers.username,
    });
    const courses= await Course.find({
        id:{
            '$in':user.purchasedCourses
        }
    })
});

module.exports = router