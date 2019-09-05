const router = require('express').Router();
let Savedevents = require('../models/savedevents.model');

router.route('/').get((req, res) => {
    Savedevents.find()
        .then(savedevents => res.json(savedevents))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const title = req.body.title;

    const newSavedevents = new Savedevents({
        username,
        title,
    });

    newSavedevents.save()
        .then(() => res.json('Event added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;