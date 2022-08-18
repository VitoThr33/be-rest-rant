const db = require('../models')

db.Place.create([{
    name: 'Pauls Pancakes',
    city: 'Helena',
    state: 'MT',
    cuisines: 'breakfast',
    pic: '/images/pancakes.jpg',
    founded: 1997
}, {
    name: 'Kens Kabobs',
    city: 'Bozeman',
    state: 'MT',
    cuisines: 'Mediterranean',
    pic: '/images/kabobs.jpg',
    founded: 1991
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})
