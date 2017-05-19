(function () {
  angular.module('app', ['angularMoment'])
	 .component('redditpage', {
   controller: function () {
     const vm = this
     vm.links = [
              {title: 'Elk Valley Trail', body: 'The Elk Valley Trail in Roxborough State Park climbs to a lesser visited valley in the park. Incredible views of the red rock formations of Roxborough make this a great moderate hike near Denver. The hike to Elk Valley is a 4.8 mile out-and-back journey, but can be turned into one of two more strenuous loop hikes. Explore all the details below for trail map, driving directions, trailhead info, and photos of this hike near Littleton, Colorado.', author: 'Michelle', votes: 0, date: '10-02-2016', imageUrl: 'http://43mbhp3aft5g3uc0tuhsk4a8.wpengine.netdna-cdn.com/wp-content/uploads/2016/09/00-header-elk-valley-trail-roxborough-state-park-view-into-fountain-valley.jpg', comments: ['nice', 'great hike', 'a comment?', 'ipsum here']},
              {title: 'South Valley Park Trails', body: 'The trails of South Valley Park are perfect for an after work hike or run in South Denver. The expansive valley near the neighborhood of Ken Caryl is enclosed on its eastern side by the exposed red rock formations of the hogback and the green foothills to the west. Views to the south are incredible, making South Valley Park especially enchanting during the early morning hours and at twilight.. Explore the full hiking profile below for full trail details, driving directions and more.', author: 'Jane Doe', votes: 100, date: '12-02-2016', imageUrl: 'http://43mbhp3aft5g3uc0tuhsk4a8.wpengine.netdna-cdn.com/wp-content/uploads/2009/12/00-south-valley-park-trails-header.jpg', comments: ['a hike', 'we had fun', 'sure?']},
              {title: 'Red Rocks Trail at Red Rocks Park', body: 'The Red Rocks Trail at Red Rocks park gives you a chance to wander through the meadows just east of the imposing red monoliths that this Denver Mountain Park is named after. Close to Denver, the Red Rocks Trail is great for a sunrise hike, an inspiring trail run or a challenging bike ride. There’s more: a cave carved into the sandstone a great geological overlook. Read our full trail profile below to get all the information you need on this Colorado hike: trail description, driving directions, Red Rocks Hiking Map, a video panorama of the park and more.', author: 'John Doe', votes: 6, date: '02-02-2017', imageUrl: 'http://43mbhp3aft5g3uc0tuhsk4a8.wpengine.netdna-cdn.com/wp-content/uploads/2014/05/00-red-rocks-trail-at-red-rocks-park-header.jpg', comments: ['Red rocks', 'Hilly', 'Warm']},
              {title: 'Mount Falcon', body: 'A hike to castle ruins in Colorado? Yep. Throw in a lookout tower, great view of Denver, of Red Rocks, and of the mountains, and you’ve got some of the highlights of the Mount Falcon Trail. The trailhead is nestled in a community in the foothills just about 40 minutes from Denver. Here we detail a 2.3 mile loop trail that hits all the destinations.', author: 'Bergquist', votes: 5, date: '05-15-2017', imageUrl: 'http://43mbhp3aft5g3uc0tuhsk4a8.wpengine.netdna-cdn.com/wp-content/uploads/2011/05/mount_falcon_header.jpg', comments: ['best', 'comments', 'ever', 'i think', 'but wait']}
     ]
     vm.addlink = function () {
       vm.link['votes'] = 0
       vm.link['date'] = new Date()
       console.log(vm.link)
       vm.links.push(vm.link)
       delete vm.link
     }
     vm.deletelink = function (e, link) {
       e.preventDefault()
       vm.links.splice(vm.links.indexOf(link), 1)
     }
     vm.addComment = function (link) {
       link.comments.push(vm.link['comments'])
       delete vm.link
     }
     vm.increaseVotes = function (e, link) {
       e.preventDefault()
       link.votes++
     }
     vm.decreaseVotes = function (e, link) {
       e.preventDefault()
       if (link.votes > 0) {
         link.votes--
       } else {
         link.votes = 0
       }
     }
   },
   templateUrl: './templates/mytemp.html'
 })
})()
