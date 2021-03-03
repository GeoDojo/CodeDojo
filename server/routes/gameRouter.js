const express = require('express');
const algoController = require ('../controllers/algoController');

const router = express.Router();


router.post('/start', 
  algoController.getTotalRows,
  algoController.getAlgo,
  algoController.generateAlgoStart,
  (req, res) => {

      //const {returnObj} = res.locals
      return res.status(200).send({
        algoID: returnObj.algo_ID,

      })
      /*
      {
        algoID: #,
        algoName: string,
        algoPrompt: string,
        algoStart: string,
        test_cases: json,
      }
      */
 });


 router.post('/submit', 
 algoController.testFunction, 
 (req, res) => {
     res.status(200)
});

module.exports = router;