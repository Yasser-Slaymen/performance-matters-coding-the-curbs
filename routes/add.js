const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({extended:false})
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const BaseUrl = 'https://codingthecurbs.api.fdnd.nl/v1/smartzone'

// Method Post
router.post('/add', urlencodedParser, (req, res) =>{
    const postData = {
        method:'POST',
        body:JSON.stringify(req.body),
        headers:  {'Content-Type': 'application/json'}

    }

    fetchJson(BaseUrl, postData).then(function () {
        res.render('pages/add', {
          title: 'add new post',
        })
      })

})

//  Post renderen add(poste) page in de link
router.get('/add',(req,res) => {
  res.render('pages/add', {
      title: 'add new post',
  })
})

async function fetchJson(url, postData = {}) {
  return await fetch(url, postData)
    .then((response) => response.json())
    .catch((error) => error)
}
module.exports = router
