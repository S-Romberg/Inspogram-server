
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('create_quote').del()
    .then(function () {
      // Inserts seed entries
      return knex('create_quote').insert([
        {id: 1, quote: '"Not all those who wander are lost"', author: 'JRR Tolkien'},
        {id: 2, quote: '"And in that moment, I swear we were infinite."', author: 'Stephen Chbosky'},
        {id: 3, quote: '"And though she be but little, she is fierce."', author: '— Helena (A Midsummer Nights Dream by William Shakespeare)'}
      ]);
    });
};
