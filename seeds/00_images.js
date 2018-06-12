

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('image_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('image_table').insert([
        {id: 1, category: 'Any', img: 'https://farm2.staticflickr.com/1727/42523988671_e7f7343321_z.jpg', src: 'https://unsplash.com/photos/nXOB-wh4Oyc'},
        {id: 2, category: 'Any', img: 'https://farm2.staticflickr.com/1742/40755177040_581f7ba6b7_z.jpg', src: 'https://unsplash.com/photos/_0mtPW3Epwo'},
        {id: 3, category: 'Any', img: 'https://farm2.staticflickr.com/1755/40755177330_d515f25289_z.jpg', src: 'https://unsplash.com/photos/yZlwwZQ7vk0'},
        {id: 4, category: 'Any', img: 'https://farm2.staticflickr.com/1723/40755177960_56b9e54807_z.jpg', src: 'https://unsplash.com/photos/MQz-tZEg8L8'},
        {id: 5, category: 'Any', img: 'https://farm2.staticflickr.com/1753/40755178380_921254db55_z.jpg', src: 'https://unsplash.com/photos/pZ61ZA8QgcY'},
        {id: 6, category: 'Any', img: 'https://farm2.staticflickr.com/1725/27693632527_37d6c8037c_z.jpg', src: 'https://unsplash.com/photos/wW1c9bc58Go'},
        {id: 7, category: 'Any', img: 'https://farm2.staticflickr.com/1730/40755207710_20ccec5e78_z.jpg', src: 'https://unsplash.com/photos/DNKfLthRJbI'},
        {id: 8, category: 'Any', img: 'https://farm2.staticflickr.com/1749/40755210180_d2a1a39179_z.jpg', src: 'https://unsplash.com/photos/FBiKcUw_sQw'},
        {id: 9, category: 'Love', img: 'https://farm2.staticflickr.com/1736/40755210700_6c418e843e_z.jpg', src: 'https://unsplash.com/photos/SSxIGsySh8o'},
        {id: 10, category: 'Love', img: 'https://farm2.staticflickr.com/1760/40755212010_694da354b8_z.jpg', src: 'https://unsplash.com/photos/4RBVvneRSOE'},
        {id: 11, category: 'Love', img: 'https://farm2.staticflickr.com/1752/40755212780_e9e57a52ff_z.jpg', src: 'https://unsplash.com/photos/jcc8sxK2Adw'},
        {id: 12, category: 'Love', img: 'https://farm2.staticflickr.com/1749/40755213960_d9c9383f10_z.jpg', src: 'https://unsplash.com/photos/UoqAgTZdF_0'},
        {id: 13, category: 'Love', img: 'https://farm2.staticflickr.com/1753/41841259714_e8bee7f89e_z.jpg', src: 'https://unsplash.com/photos/MArKk9f4s6g'},
        {id: 14, category: 'Any', img: 'https://farm2.staticflickr.com/1760/41841260804_e97a70889b_z.jpg', src: 'https://unsplash.com/photos/ii37vagPGgY'},
        {id: 15, category: 'Any', img: 'https://farm2.staticflickr.com/1751/41841261684_a6bf4e7cc0_z.jpg', src: 'https://unsplash.com/photos/V8BFBFjAWZw'},
        {id: 16, category: 'Travel', img: 'https://farm2.staticflickr.com/1742/41841262204_0d8692c8fb_z.jpg', src: 'https://unsplash.com/photos/MtOVM_rKgag'},
        {id: 17, category: 'Travel', img: 'https://farm2.staticflickr.com/1755/41841263564_26713ab6d1_z.jpg', src: 'https://unsplash.com/photos/3NCA3tbaE5I'},
        {id: 18, category: 'Travel', img: 'https://farm2.staticflickr.com/1725/40755217630_84b6e0e6e8_z.jpg', src: 'https://unsplash.com/photos/jB8WaHvHmoY'},
        {id: 19, category: 'Travel', img: 'https://farm2.staticflickr.com/1756/40755218650_0e1b63a060_z.jpg', src: 'https://unsplash.com/photos/ONpGBpns3cs'},
        {id: 20, category: 'Travel', img: 'https://farm2.staticflickr.com/1731/40755220060_1a5bc6ec5b_z.jpg', src: 'https://unsplash.com/photos/Af8ZjGMsHKQ'},
        {id: 21, category: 'Travel', img: 'https://farm2.staticflickr.com/1757/40755220890_d2b596e512_z.jpg', src: 'https://unsplash.com/photos/J1OV-aqPXfw'},
        {id: 22, category: 'Travel', img: 'https://farm2.staticflickr.com/1737/40755221770_96ae7c9a3c_z.jpg', src: 'https://unsplash.com/photos/af9QZ4NHmPk'},
        {id: 23, category: 'Travel', img: 'https://farm2.staticflickr.com/1755/40755224050_8fa3aeaea2_z.jpg', src: 'https://unsplash.com/photos/LERXSVYn4_I'},
        {id: 24, category: 'Love', img: 'https://farm2.staticflickr.com/1758/40755225520_bd0c3b1f03_z.jpg', src: 'https://unsplash.com/photos/7vTvcGDtscA'},
        {id: 25, category: 'Any', img: 'https://farm2.staticflickr.com/1753/40755226440_14422c25fa_z.jpg', src: 'https://unsplash.com/photos/BboXv0rveOg'},
        {id: 26, category: 'Love', img: 'https://farm2.staticflickr.com/1725/40755226940_4f1337be82_z.jpg', src: 'https://unsplash.com/photos/fkLr2QOQitk'}
      ]);
    });
};
