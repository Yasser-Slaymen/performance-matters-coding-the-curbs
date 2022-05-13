const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({extended:false})
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const BaseUrl = 'https://codingthecurbs.api.fdnd.nl/v1/smartzone'

// Method Post
router.post('/edit', urlencodedParser, (req, res) =>{
    const postData = {
        method:'PUT',
        body:JSON.stringify(req.body),
        headers:  {'Content-Type': 'application/json'}

    }

    fetchJson(BaseUrl, postData).then(function () {
        res.render('pages/edit', {
          title: 'add new post',
        })
      })

})

//  Post renderen page in de link
router.get('/edit',(req,res) => {
  res.render('pages/edit', {
      title: 'edit new post',
  })
})

async function fetchJson(url, postData = {}) {
  return await fetch(url, postData)
    .then((response) => response.json())
    .catch((error) => error)
}


module.exports = router
