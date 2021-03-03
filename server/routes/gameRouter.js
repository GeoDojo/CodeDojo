const express = require('express');
const algoController = require('../controllers/algoController');

const router = express.Router();

router.post(
  '/start',
  algoController.getTotalRows,
  algoController.getAlgo,
  algoController.generateAlgoStart,
  (req, res) => {
    const { returnObj } = res.locals;
    return res.status(200).send({
      algoID: returnObj.algo_id,
      algoName: returnObj.algo_name,
      algoPrompt: returnObj.algo_prompt,
      test_cases: returnObj.test_cases,
      completedAlgos: res.locals.completedAlgos,
      algoStart: res.locals.algoStart,
      totalRows: res.locals.totalRows,
    });
  }
);

router.post('/submit', algoController.testFunction, (req, res) => {
  const respBody = {};

  if (res.locals.winner) {
    respBody.winner = res.locals.winner;
  }

  respBody.endGame = res.locals.endGame;

  return res.status(200).send(respBody);
});

module.exports = router;
