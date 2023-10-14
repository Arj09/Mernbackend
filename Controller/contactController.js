const asyncHandler = require("express-async-handler");
const Contact = require("../model/contactModel")



const getContacts = asyncHandler(async (req,res)=>{
    const contact = await Contact.find({ user_id: req.user.id});
   
   
    res.status(200).json(contact)
})


const createContacts = asyncHandler(async (req,res)=>{
    console.log(req.body);
    const {name, phone, email} = req.body;
    if(!name || !phone || !email){
        res.status(400)
        throw new Error("all filed all mandatory")
    }

    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id: req.user.id,

    });
    

    res.status(201).json(contact)
})


const getContact = asyncHandler(async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error('contact not found');
    }

    
    res.status(200).json(contact);
})


const updateContacts = asyncHandler(async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error('contact not found');
    }

    if (contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have permission to update other user contacts");
      }

    const updateContacts = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true
        }
    )


    

    res.status(200).json(updateContacts)
})


const deletetContacts = asyncHandler(async  (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error('contact not found');
    }

    if (contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have permission to delete  contacts");
      }

    await Contact.findByIdAndRemove(
        req.params.id
    )
    res.status(200).json(contact)
})

module.exports = {getContacts, createContacts, deletetContacts, getContact,updateContacts }