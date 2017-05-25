(function () {
  'use strict'

  angular.module('app')
  .component('editurl', {
    controller: controller,
    templateUrl: './templates/comment.html'
  })

  // controller.$inject = ['$state', '$http']
  function controller ($state, $http) {
    const vm = this

    vm.$onInit = function () {
      const linkId = $state.params.id
      $http.get('/api/queries/' + linkId).then(function (response) {
        vm.hike = response.data
        console.log('title is')
        console.log(vm.hike.title)
      })
    }
  }
})()
