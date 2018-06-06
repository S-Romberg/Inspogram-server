const express = require('express');
const router = express.Router();

const queries = require('../queries/images');

router.get("/", (request, response, next) => {
    queries.list().then(images => {
        response.json({images});
    }).catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id).then(image => {
        image
            ? response.json({image})
            : response.status(404).json({message: 'Not found'})
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body).then(image => {
        response.status(201).json({image: image});
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body).then(image => {
        response.json({image: image[0]});
    }).catch(next);
});

module.exports = router;
