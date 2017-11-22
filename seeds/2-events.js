exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {
          id: 1,
          userId: 3,
          title: 'nulla nostrud enim',
          dateCreated: '2016-02-01T01:38:27'
        },
        {
          id: 2,
          userId: 1,
          title: 'quids utjlj esfdfsdt',
          dateCreated: '2017-10-08T07:54:53'
        },
        {
          id: 3,
          userId: 2,
          title: 'ullamco utjlj elit',
          dateCreated: '2017-06-29T07:13:17'
        },
        {
          id: 4,
          userId: 2,
          title: 'quis occaecat aliquip',
          dateCreated: '2017-04-04T10:42:44'
        }
      ]);
    });
};