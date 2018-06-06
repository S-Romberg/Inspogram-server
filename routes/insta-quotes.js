const express = require('express');
const router = express.Router();

const queries = require('../queries/quotes');

router.get("/", (request, response, next) => {
    queries.list().then(quotes => {
        response.json({quotes});
    }).catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id).then(quote => {
        quote
            ? response.json({quote})
            : response.status(404).json({message: 'Not found'})
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body).then(quote => {
        response.status(201).json({quote: quote});
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body).then(quote => {
        response.json({quote: quote[0]});
    }).catch(next);
});

module.exports = router;
