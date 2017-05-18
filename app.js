(function () {
  angular.module('app', [])
	 .component('redditpage', {
   controller: function () {
     const vm = this
     vm.links = [
              {title: 'Bootswatch', body: 'This is my boss, Jonathan Hart, a self-made millionaire, he\'s quite a guy. This is Mrs H., she\'s gorgeous, she\'s one lady who knows how to take care of herself. By the way, my name is Max. I take care of both of them, which ain\'t easy, \'cause when they met it was MURDER!', author: 'Michelle', votes: 0, date: '10-02-2016', imageUrl: 'https://pbs.twimg.com/profile_images/504444173521403905/n6FsWiMQ.png', comments: ['nice', 'this sucks', 'a comment?', 'ipsum here']},
              {title: 'Native CSS', body: 'Knight Rider, a shadowy flight into the dangerous world of a man who does not exist. Michael Knight, a young loner on a crusade to champion the cause of the innocent, the helpless in a world of criminals who operate above the law.', author: 'Everyone', votes: 100, date: '12-02-2016', imageUrl: 'https://camo.githubusercontent.com/7e97b9c10423e06bf6f91e971d8a9cec5926adfe/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f6373732d332e737667', comments: ['a thing', 'what thing', 'sure?']},
              {title: 'HTML', body: '80 days around the world, we\'ll find a pot of gold just sitting where the rainbow\'s ending. Time - we\'ll fight against the time, and we\'ll fly on the white wings of the wind. 80 days around the world, no we won\'t say a word before the ship is really back. Round, round, all around the world. Round, all around the world. Round, all around the world. Round, all around the world.', author: 'Someone', votes: 6, date: '02-02-2017', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/200px-HTML5_logo_and_wordmark.svg.png', comments: ['harry', 'hermione', 'ron']},
              {title: 'Bootstrap', body: 'Top Cat! The most effectual Top Cat! Who\'s intellectual close friends get to call him T.C., providing it\'s with dignity. Top Cat! The indisputable leader of the gang. He\'s the boss, he\'s a pip, he\'s the championship. He\'s the most tip top, Top Cat.', author: 'Bergquist', votes: 5, date: '05-15-2017', imageUrl: 'https://ng-bootstrap.github.io/img/logo.svg', comments: ['best', 'comments', 'ever', 'i think', 'but wait']}
     ]
     vm.addlink = function () {
       vm.link['votes'] = 0
       vm.link['date'] = new Date().toLocaleDateString()
       console.log(vm.link)
       vm.links.push(vm.link)
       delete vm.link
     }
     vm.deletelink = function (e, link) {
       e.preventDefault()
       vm.links.splice(vm.links.indexOf(link), 1)
     }
     vm.addComment = function (link) {
       console.log(vm.link)
       console.log(link)
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
