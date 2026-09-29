const router = require("express").Router()


router.get('/', (req, res) => {
    try {
        res.render('homepage.ejs')
    } catch (err) {
        console.log(err)
    }
})
module.exports = router;
