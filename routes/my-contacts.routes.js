const router = require("express").Router();
const Contacts = require('../models/Contacts')
const Types = require('../models/Types')
const isSignedIn = require('../middleware/is-signed-in')

router.get('/', isSignedIn, async (req, res) => {
    const personalContacts = await Contacts.find({ Owner: req.session.user._id }).populate('Type');
    res.render('contacts/mContacts.ejs', { pc: personalContacts })
})

router.get('/new', isSignedIn, (req, res) => {
    res.render('contacts/create.ejs')
})

router.get('/:id/edit', isSignedIn, async (req, res) => {
    const contact = await Contacts.findById(req.params.id).populate('Type')
    if (String(contact.Owner) !== String(req.session.user._id)) {
        return res.send('YOU DONT HAVE ACCESS TO EDIT THIS OBJECT')
    }
    res.render('contacts/contact-edit.ejs', { contact: contact })
})

router.post('/', async (req, res) => {
    const newType = await Types.create({
        Type: req.body.Type,
        Description: req.body.Description
    })
    const newContact = await Contacts.create({
        Name: req.body.Name,
        Phone: req.body.Phone,
        Email: req.body.Email,
        makePublic: req.body.makePublic,
        Company: req.body.Company,
        job: req.body.job,
        dept: req.body.dept,
        location: req.body.location,
        Owner: req.session.user._id,
        Type: newType._id
    })
    res.redirect('/my-contacts')
})

router.put('/:id', async (req, res) => {
    const contact = await Contacts.findById(req.params.id)
    if (String(contact.Owner) !== String(req.session.user._id)) {
        return res.send('YOU DONT HAVE ACCESS TO EDIT THIS OBJECT')
    }
    const updatedType = await Types.findByIdAndUpdate(contact.Type, {
        Type: req.body.Type,
        Description: req.body.Description
    })
    const updatedContact = await Contacts.findByIdAndUpdate(req.params.id, {
        Name: req.body.Name,
        Phone: req.body.Phone,
        Email: req.body.Email,
        makePublic: req.body.makePublic,
        Company: req.body.Company,
        job: req.body.job,
        dept: req.body.dept,
        location: req.body.location,
        Owner: req.session.user._id,
        Type: updatedType._id
    })
    res.redirect('/my-contacts')
})

router.delete('/:id', async (req, res) => {
    const contact = await Contacts.findById(req.params.id)
    if (String(contact.Owner) !== String(req.session.user._id)) {
        return res.send('YOU DONT HAVE ACCESS TO DELETE THIS OBJECT')
    }
    const deletedContact = await Contacts.findByIdAndDelete(req.params.id)
    res.redirect('/my-contacts')
})


module.exports = router