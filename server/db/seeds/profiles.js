
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: 1, 
        name: 'Rangi Toto',
        email: 'rangitoto@gmail.com',
        phone: 021020202020,
        rate: 50,
        image: 'images\heeni.png',
        description: 'Kia ora, Ko Rangitoto toku ingoa',
        dialect: 'NgaPuhi',
        level: 'Beginner'
      }
      ]);
    });
};
