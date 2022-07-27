// test your bounty model CRUD
const db = require('./models')
// CREATE
const createBounty = async ()=>{
    try{
        const newBounty = new db.bounty({
            name: 'Bugs Bunny',
            wantedFor: 'stealing carrots',
            client: 'Elmer Fudd',
            ship: 'Wabbit of the Seas',
            reward: 100000,
            captured: false,
            lastSeen: 'last week'
        })
        await newBounty.save()
        
    } catch (err){
        console.warn(err)
    }
}
// createBounty()
// READ
const findBounties = async ()=>{
    try{
        const foundBounty = await db.bounty.find({})
        console.log(foundBounty)

    } catch (err){
        console.warn(err)
    }
}
// findBounties()

// UPDATE
const updateBounty = async ()=>{
    try{
        const update = await db.bounty.findOneAndUpdate(
            {name: 'Bugs Bunny'},
            {captured: true},
            {new: true}
        )
        console.log(update)
    } catch (err){
        console.warn(err)
    }
}
// updateBounty()
const upsertBounty = async ()=>{
    try{
        const update = await db.bounty.findOneAndUpdate(
            {name: 'Stitch'},
            {
                name: 'Stitch',
                wantedFor: 'illegal alien',
                client: 'Crazy Scientist',
                ship: 'Stitchcraft',
                reward: 2000000,
                captured: false,
                lastSeen: '15 years'
            },
            {upsert: true, new: true}
        )
        console.log(update)
    } catch (err){
        console.warn(err)
    }
}
// upsertBounty()

// DESTROY
const destroyBounty = async ()=>{
    try{
        const destroyStitch = await db.bounty.findOneAndDelete({name: 'Stitch'})
        console.log(destroyStitch)
    } catch (err){
        console.warn(err)
    }
}
// destroyBounty()