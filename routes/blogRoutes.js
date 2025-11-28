const express = require('express');
const router = express.Router(); 


router.get('/create', blog_create_get);

router.get('/', blog_index);

router.post('/', blog_create_post);

router.get('/:id', blog_details);

router.delete('/:id', blog_delete);






module.exports = router;