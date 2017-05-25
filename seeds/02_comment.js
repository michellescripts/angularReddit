
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('comment').del()
    .then(function () {
      // Inserts seed entries
      return knex('comment').insert([
        {
          id: 100,
          link_id: 100,
          comments: 'nice'
        },
        {
          id: 200,
          link_id: 100,
          comments: 'great hike'
        },
        {
          id: 300,
          link_id: 100,
          comments: 'a comment?'
        },
        {
          id: 400,
          link_id: 100,
          comments: 'ipsum here'
        },
        {
          id: 500,
          link_id: 200,
          comments: 'a hike'
        },
        {
          id: 600,
          link_id: 200,
          comments: 'we had fun'
        },
        {
          id: 700,
          link_id: 200,
          comments: 'sure?'
        },
        {
          id: 800,
          link_id: 300,
          comments: 'Red rocks'
        },
        {
          id: 900,
          link_id: 300,
          comments: 'Hilly'
        },
        {
          id: 1000,
          link_id: 300,
          comments: 'Warm'
        },
        {
          id: 1100,
          link_id: 400,
          comments: 'best'
        },
        {
          id: 1200,
          link_id: 400,
          comments: 'comments'
        },
        {
          id: 1300,
          link_id: 400,
          comments: 'i think'
        }
      ])
    })
}
