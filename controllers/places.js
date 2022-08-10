const router = require('express').Router()

router.get('/', (req, res) => {
  let places = [{
    name: 'Pauls Pancakes',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Breakfast, Pancakes',
    pic: '/images/pancakes.jpg'

  }, {
    name: 'Kikn Kabobs',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Meat, Kabobs',
    pic: '/images/kabobs.jpg'
  }]

  res.render('places/index', { places })

})

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})



router.get('/new', (req, res) => {
  res.render('places/new')
})

module.exports = router

