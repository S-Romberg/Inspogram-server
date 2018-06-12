
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('create_quote').del()
    .then(function () {
      // Inserts seed entries
      return knex('create_quote').insert([
        {id: 1, category: 'Travel', quote: '"Not all those who wander are lost"', author: 'JRR Tolkien'},
        {id: 2, category: 'Any', quote: '"And in that moment, I swear we were infinite."', author: 'Stephen Chbosky'},
        {id: 3, category: 'Any', quote: '"And though she be but little, she is fierce."', author: '— Helena (A Midsummer Nights Dream by William Shakespeare)'},
        {id: 4, category: "Any", quote: "Work like you don't need the money. Love like you've never been hurt. Dance like nobody's watching.", author: "Satchel Paige" },{id: 5, category: "Love", quote: "The best love is the kind that awakens the soul; that makes us reach for more, that plants the fire in our hearts and brings peace to our minds. That’s what I hope to give you forever.", author: "Nicholas Sparks"},
        {id: 6, category: "Love", quote: "All, everything that I understand, I only understand because I love.", author: "Leo Tolstoy"},
        {id: 7, category: "Love", quote: "I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.", author: "Angelita Lim"},
        {id: 8, category: "Love", quote: "I swear I couldn't love you more than I do right now, and yet I know I will tomorrow.", author: "Leo Christopher"},
        {id: 9, category: "Travel", quote: "Not until we are lost do we begin to understand ourselves.", author: "Henry David Thoreau"},
        {id: 10, category: "Travel", quote: "Like all great travellers, I have seen more than I remember, and remember more than I have seen.", author: "Benjamin Disraeli"},
        {id: 11, category: "Travel", quote: "Twenty years from now you will be more disappointed by the things you didn't do than by the ones you did. So throw off the bowlines, sail away from the safe harbor. Catch the trade winds in you sail. Explore. Dream. Discover.", author: "Mark Twain"},
        {id: 12, category: "Any", quote: "Two roads diverged in a wood and I – I took the one less travelled by.", author: "Robert Frost"}     
      ]);
    });
};
