const express = require('express');
const logRoute = require('./log.route');

const router = express.Router();

router.use('/log', logRoute);

router.get('/health', (req, res) => {
  const healthcheck = {
		uptime: process.uptime(),
		message: 'OK',
		timestamp: Date.now()
  };
  res.send(JSON.stringify(healthcheck));
});

module.exports = router;