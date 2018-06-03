const {assert} = require("chai");
const request = require("supertest");
const app = require("../app");
const knex = require("../database-connection");

describe("API requests", () => {
    beforeEach(done => {
        knex.seed.run().then(() => {
            done();
        });
    });
    describe("#Read", () => {
        it("reads a New Year's resolution", done => {
            request(app)
                .get("/resolutions/2")
                .expect(200)
                .then(response => {
                    assert.equal(response.body.resolution.id, 2);
                    assert.include(response.body.resolution.dueDate, "1997-05-01");
                    assert.equal(response.body.resolution.resolution, "Do stand-up");
                }).then(done).catch(done);
        });
    });
    describe("#List", () => {
        it("lists New Year's resolutions", done => {
            request(app)
                .get("/resolutions")
                .expect(200)
                .then(response => {
                    assert.equal(response.body.resolutions[0].id, "1");
                    assert.include(response.body.resolutions[0].dueDate, "1997-02-01");
                    assert.equal(response.body.resolutions[0].resolution, "Go skiing");

                    assert.equal(response.body.resolutions[1].id, "2");
                    assert.include(response.body.resolutions[1].dueDate, "1997-05-01");
                    assert.equal(response.body.resolutions[1].resolution, "Do stand-up");

                    assert.equal(response.body.resolutions[2].id, "3");
                    assert.include(response.body.resolutions[2].dueDate, "1997-09-01");
                    assert.equal(response.body.resolutions[2].resolution, "Start knitting");
                }).then(done).catch(done);
        });
    });
    describe("#Create", () => {
        it("creates New Year's resolutions", done => {
            request(app)
                .post("/resolutions")
                .send({
                    dueDate: "1997-03-01",
                    resolution: "Take a pottery class"
                }).expect(201)
                .then(response => {
                    assert.equal(response.body.resolution.id, 4);
                    assert.include(response.body.resolution.dueDate, "1997-03-01");
                    assert.equal(response.body.resolution.resolution, "Take a pottery class");
                }).then(done).catch(done);
        });
    });
    describe("#Delete", () => {
        it("deletes New Year's resolutions", done => {
            request(app)
                .delete("/resolutions/2")
                .expect(204)
                .then(response => {
                    return request(app)
                        .get("/resolutions/2")
                        .expect(404);
                }).then(() => done()).catch(done);
        });
    });
    describe("#Update", () => {
        it("updates a New Year's resolution", done => {
            request(app)
                .put("/resolutions/2")
                .send({
                    dueDate: "1997-07-01"
                }).expect(200)
                .then(response => {
                    return request(app)
                        .get("/resolutions/2")
                        .expect(200)
                }).then(response => {
                    assert.equal(response.body.resolution.id, 2);
                    assert.include(response.body.resolution.dueDate, "1997-07-01");
                    assert.equal(response.body.resolution.resolution, "Do stand-up");
                    return;
                }).then(done).catch(done);
        });
    });
});
