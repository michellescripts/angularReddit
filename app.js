// (function () {
//   'use strict'
  angular.module('app', [])
	 .component('redditpage', {
   controller: function () {
     const vm = this
     vm.links = [
              {title: 'Bootswatch', body: 'Great way to use colors', author: 'Michelle', votes: 0, imageUrl: 'https://pbs.twimg.com/profile_images/504444173521403905/n6FsWiMQ.png'},
              {title: 'Native CSS', body: 'The only real option.', author: 'Everyone', votes: 100, imageUrl: 'https://camo.githubusercontent.com/7e97b9c10423e06bf6f91e971d8a9cec5926adfe/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f6373732d332e737667'},
              {title: 'HTML', body: 'The key to LIFE', author: 'Someone', votes: 6, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/200px-HTML5_logo_and_wordmark.svg.png'},
              {title: 'Bootstrap', body: 'Great way to set up a page', author: 'Bergquist', votes: 5, imageUrl: 'https://ng-bootstrap.github.io/img/logo.svg'}
     ]
     vm.addlink = function () {
       vm.links.push(vm.link)
       delete vm.link
     }
     vm.deletelink = function (e, link) {
       e.preventDefault()
       vm.links.splice(vm.links.indexOf(link), 1)
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
