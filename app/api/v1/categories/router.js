const express = require('express');
const router = express();


router.get('/categories', (req, res) => {
    res.status(200).json({
        message: "GET categories",
    });
});

router.post('/categories', (req, res) => {
    res.status(200).json({
        message: "POST Categories",
    });
});

router.get('/categories/:id', (req, res) => {
    res.status(200).json({
        message: "GET categories ID",
    });
});

router.put('/categories/:id', (req, res) => {
    res.status(200).json({
        message: "Update categories id",
    });
});

router.delete('/categories/:id', (req, res) => {
    res.status(200).json({
        message: "DELETE categories",
    });
});
module.exports = router;