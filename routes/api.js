const express = require('express');
const router = express.Router();

router.get('/test', async function(req, res, next) {
  try {
    console.log("Hi there!");
    res.json({test: "ok"});
  } catch (err) {
    console.error(`Error `, err.message);
    res.status(err.statusCode || 500).json({'message': err.message});
  }
});

module.exports = router;
