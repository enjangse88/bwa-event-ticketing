const express = require('express');
const router = express();
const { createCMSOrganizer, createCMSUser, } = require('./controller');

router.post('/organizers', createCMSOrganizer);

module.exports = router;