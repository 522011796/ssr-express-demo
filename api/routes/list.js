//import axios from 'axios'
const {Router} = require('express')
const router = Router()
const axios = require('axios')
import globalConfig from './../config'

/* GET users listing. */
router.get('/topicList', function (req, res, next) {
    axios.get(globalConfig.api.url + '/topics').then(data=>{
        //console.log(data.data.data);
        res.json(data.data.data)
    });
})

module.exports = router
