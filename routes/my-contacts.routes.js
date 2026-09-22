const router = require("express").Router;
const Contacts = require('../models/Contacts')
const Types = require('../models/Types')
const isSignedIn = require('../middleware/is-signed-in')

router.get('/', isSignedIn, async (req, res) => {
    const personalContacts = await Contacts.find({ owner: req.session.user })
    res.render('contacts/pContacts.ejs', { pc: personalContacts })
})

router.get('/:id', isSignedIn, async (req, res) => {
    const contact = await Contacts.findById(req.params.id)
    const type = await Types.findById(contact.Type)
    if (String(contact.owner) !== String(req.session.user._id || !contact.makePublic)) {
        return res.send('YOU DONT HAVE ACCESS TO VIEW THIS OBJECT')
    }
    res.render('contacts/contact-details.ejs', { contact: contact, type: type })
})

router.get('/:id/edit', isSignedIn, async (req, res) => {
    const contact = await Contacts.findById(req.params.id)
    const type = await Types.findById(contact.Type)
    if (String(contact.owner) !== String(req.session.user._id)) {
        return res.send('YOU DONT HAVE ACCESS TO EDIT THIS OBJECT')
    }
    res.render('contacts/contact-edit.ejs', { contact: contact, type: type })
})

router.post('/', (req, res) => {
    const newType = Types.create({
        Type: req.body.Type,
        Description: req.body.Description
    })
    const newContact = Contacts.create({
        Name: req.body.Name,
        Phone: req.body.Phone,
        Email: req.body.Email,
        makePublic: Boolean(req.body.makePublic),
        Company: req.body.Company
    })
    res.redirect('/')
})

router.put('/:id', async (req, res) => {
    const updatedType = await Types.findByIdAndUpdate(req.params.id, {
        Type: req.body.Type,
        Description: req.body.Description
    })
    const updatedContact = await Contacts.findByIdAndUpdate(req.params.id, {
        Name: req.body.Name,
        Phone: req.body.Phone,
        Email: req.body.Email,
        makePublic: Boolean(req.body.makePublic),
        Company: req.body.Company
    })
    res.redirect('/')
})

router.delete('/:id', async (req, res) => {
    const deletedContact = Contacts.findByIdAndDelete(req.params.id)
    res.redirect('/')
})


module.exports = router