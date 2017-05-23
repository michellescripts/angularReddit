(function () {
  angular.module('app', ['angularMoment'])
	 .component('redditpage', {
   controller: controller,
   templateUrl: './templates/mytemp.html'
 })

  controller.$inject = ['$http']
  function controller ($http) {
    const vm = this

    vm.$onInit = function () {
      console.log('hit app.module')
      $http.get('/api/queries').then(function (response) {
        console.log(response.data)
        vm.links = response.data
      })
    }

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
  }
})()
