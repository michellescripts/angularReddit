
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('comment').del()
    .then(function () {
      // Inserts seed entries
      return knex('comment').insert([
        {
          id: 1,
          link_id: 100,
          comments: 'nice'
        },
        {
          id: 2,
          link_id: 100,
          comments: 'great hike'
        },
        {
          id: 3,
          link_id: 100,
          comments: 'a comment?'
        },
        {
          id: 4,
          link_id: 100,
          comments: 'ipsum here'
        },
        {
          id: 5,
          link_id: 200,
          comments: 'a hike'
        },
        {
          id: 6,
          link_id: 200,
          comments: 'we had fun'
        },
        {
          id: 7,
          link_id: 200,
          comments: 'sure?'
        },
        {
          id: 8,
          link_id: 300,
          comments: 'Red rocks'
        },
        {
          id: 9,
          link_id: 300,
          comments: 'Hilly'
        },
        {
          id: 10,
          link_id: 300,
          comments: 'Warm'
        },
        {
          id: 11,
          link_id: 400,
          comments: 'best'
        },
        {
          id: 12,
          link_id: 400,
          comments: 'comments'
        },
        {
          id: 13,
          link_id: 400,
          comments: 'i think'
        }
      ])
    })
}
