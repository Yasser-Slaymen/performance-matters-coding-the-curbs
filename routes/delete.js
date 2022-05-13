const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({extended:false})
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const BaseUrl = 'https://codingthecurbs.api.fdnd.nl/v1/smartzone'

// Method Post
router.post('/delete', urlencodedParser, (req, res) =>{
    const postData = {
        method:'DELETE',
        body:JSON.stringify(req.body),
        headers:  {'Content-Type': 'application/json'}

    }

    fetchJson(BaseUrl, postData).then(function () {
        res.render('pages/delete', {
          title: 'delete',
        })
      })

})

//  Post renderenpage in de link
router.get('/delete',(req,res) => {
  res.render('pages/delete', {
      title: 'delete',
  })
})

async function fetchJson(url, postData = {}) {
  return await fetch(url, postData)
    .then((response) => response.json())
    .catch((error) => error)
}


module.exports = router
