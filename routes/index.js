var express = require('express');
var router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const Story = require('../models/Story')
/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('login', {
    layout: 'login',
  })
});
 
router.get('/dashboard',  async (req, res) => {
  
  try {
    const stories = await Story.find()
    //console.log(stories);
    res.render('dashboard', {     
      stories,
    })
  } catch (err) {
    console.error(err)
    res.render('error/500')
  }
})
module.exports = router;
