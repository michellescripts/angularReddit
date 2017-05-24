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
      $http.get('/api/queries').then(function (response) {
        vm.links = response.data
      })
    }
    vm.addlink = function () {
      $http.post('/api/queries/', vm.newlink).then(function (response) {
        vm.links.push(response.data)
      })
    }
    vm.deletelink = function (e, link) {
      e.preventDefault()
      $http.delete('/api/queries/' + link['id']).then(res => {
        vm.links.splice(vm.links.indexOf(link), 1)
      })
    }
    vm.editLink = function (link, id) {
      link['id'] = id
      $http.patch('/api/queries/' + id, link).then(res => {
        vm.links.splice(vm.links.indexOf(link), 1)
        vm.links.push(res.data)
      })
    }

// TODO:

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
