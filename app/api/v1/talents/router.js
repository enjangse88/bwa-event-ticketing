const express = require('express');
const router = express();

router.get('/talents', (req, res) => {
    res.status(200).json({
        message: "Get Talents"
    });
});

router.post('/talents', (req, res) => {
    res.status(200).json({
        message: "Post talents"
    });
});

router.get('/talents/:id', (req, res) => {
    res.status(200).json({
        message: "Get talents by id"
    });
});

router.put('/talents/:id', (req, res) => {
    res.status(200).json({
      message: "Update talents"
    });
});

router.delete('/talents/:id', (req, res) => {
    req.status(200).json ({
        message: "Delete id"
    });
});

module.exports = router;