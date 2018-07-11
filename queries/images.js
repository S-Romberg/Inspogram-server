const database = require("../database-connection");

module.exports = {
    list(){
        return database('image_table');
    },
    read(id){
        return database('image_table').where('id', id).first();
    },
    create(image_table){
        return database('image_table').insert(image_table).returning('*').then(record => record[0])
    },
    update(id, image_table){
        return database('image_table').update(image_table).where('id', id).returning('*').then(record => record[0])
    },
    delete(id){
        return database('image_table').where('id', id).del()
    }
};