const router = require("express").Router;
const Contacts = require('../models/Contacts')
const Types = require('../models/Types')
const User = require('../models/User')
const isSignedIn = require('../middleware/is-signed-in')

router.get('/', async (req, res) => {
    const publicContacts = await Contacts.find({ makePublic: true })
    const owners = User.find()
    res.render('contacts/pcontacts.ejs', { pc: publicContacts, owners:owners })
})

router.get('/:id', async (req, res) => {
    const contact = await Contacts.findById(req.params.id)
    const type = await Types.findById(contact.Type)
    res.render('contacts/contact-details.ejs', { contact: contact, type: type })
})


module.exports = router