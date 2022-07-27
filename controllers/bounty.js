const router = require('express').Router()
const db = require('../models')

// GET /bounties -- index of bounties
router.get('/', async (req,res)=>{
    try {
        // find all bounties
        const bounties = await db.bounty.find({})
        //send to client
        res.json(bounties)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'server error' })
    }
})

// GET /bounties/:id -- single bounty
router.get('/:id', async (req,res)=>{
    try {
        // get id from url params
        console.log(req.params.id)
        const bounty = await db.bounty.findById(req.params.id)
        // send to client
        res.json(bounty)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'server error' }) 
    }
})

// POST /bounties -- create new bounty
router.post('/', async (req,res)=>{
    try {
        // const bounty = new db.bounty()
        const newBounty = await db.bounty.create(req.body)
        res.status(201).json(newBounty)
    } catch (error) {
        console.warn(error)
        if(error.name === "ValidationError"){
            res.status(400).json({ msg: error.message })
        } else {
            res.status(500).json({ msg: 'server error' })
        }

    }
})

// PUT /bounties/:id -- update a bounty
router.put('/:id', async (req,res)=>{
    try {
        // get id from url params and update
        const id = req.params.id
        const options = {new:true}
        const updatedBounty = await db.bounty.findByIdAndUpdate(id, req.body, options)
        //send the updated bounty back to client
        res.json(updatedBounty)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'server error' }) 
    }
})


// DELETE /bounties/:id -- delete a bounty
router.delete('/:id', async (req,res)=>{
    try {
        // get id from url params
        // console.log(req.params.id)
        await db.bounty.findByIdAndDelete(req.params.id)
        // send no content status 
        res.sendStatus(204) //nothing exists was successful
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'server error' }) 
    }
})


module.exports = router