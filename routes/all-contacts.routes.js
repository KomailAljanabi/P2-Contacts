const router = require("express").Router();
const Contacts = require('../models/Contacts')
const Types = require('../models/Types')
const User = require('../models/User')
const isSignedIn = require('../middleware/is-signed-in')

router.get('/', async (req, res) => {
    try {
        const publicContacts = await Contacts.find({ makePublic: true })
            .populate('Type')
            .populate('Owner')

        res.render('contacts/pContacts.ejs', { pc: publicContacts });
    } catch (err) {
        console.log(err)
    }
});
module.exports = router