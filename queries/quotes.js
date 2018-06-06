const database = require("./database-connection");

module.exports = {
    list(){
        return database('create_quote');
    },
    read(id){
        return database('create_quote').where('id', id).first();
    },
    create(create_quote){
        return database('create_quote').insert(create_quote).returning('*').then(record => record[0])
    },
    update(id, create_quote){
        return database('create_quote').update(create_quote).where('id', id).returning('*').then(record => record[0])
    },
    delete(id){
        return database('create_quote').del()
    }
};
