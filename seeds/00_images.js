

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('image_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('image_table').insert([
        {id: 1, category: 'Any', img: 'https://farm2.staticflickr.com/1727/42523988671_e7f7343321_z.jpg', src: 'https://unsplash.com/photos/nXOB-wh4Oyc'},
        {id: 2, category: 'Any', img: 'https://farm2.staticflickr.com/1742/40755177040_581f7ba6b7_z.jpg', src: 'https://unsplash.com/photos/_0mtPW3Epwo'},
        {id: 3, category: 'Any', img: 'https://farm2.staticflickr.com/1755/40755177330_d515f25289_z.jpg', src: 'https://unsplash.com/photos/yZlwwZQ7vk0'}
      ]);
    });
};
