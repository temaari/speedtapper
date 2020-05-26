const express = require('express');

const router = express.Router();

const BlogPost = require('../models/blogpost')

// routes
// router.get('/', (req, res) => {
//     BlogPost.find({ })
//         .then((data) => {
//             console.log('Data: ', data)
//             res.json(data);
//         })
//         .catch((error) => {
//             console.log('Error: ', error)
//         }
//     );
// });

router.get('/name', (req, res) => {
    const data = {
        username: 'Briana MacKay',
        add: 19
    };
    res.json(data);
});

// router.post('/save', (req, res) => {
//     const data = req.body;

//     const newBlogPost = new BlogPost(data);
//     newBlogPost.save((error) => {
//         if (error) {
//             res.status(500).json({ msg: 'Sorry, internal server errors' });
//             return;
//         } 
//         return res.json({
//             msg: 'Your Data has been saved!!!'
//         });
//     })

// });

module.exports = router