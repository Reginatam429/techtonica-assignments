const router = require('express').Router();
let Events = require('../models/events.model');

router.route('/').get((req, res) => {
    Events.find()
        .then(events => res.json(events))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const location = req.body.location;
    const date = Date.parse(req.body.date);

    const newEvent = new Event({
        title,
        location,
        date,
    });

    newEvent.save()
        .then(() => res.json('Event added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;