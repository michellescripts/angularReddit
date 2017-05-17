// (function () {
//   'use strict'
  angular.module('app', [])
	 .component('redditpage', {
   controller: function () {
     const vm = this
     vm.links = [
              {title: 'Bootswatch', body: 'Great way to use colors', author: 'Michelle', votes: 0, imageUrl: 'https://pbs.twimg.com/profile_images/504444173521403905/n6FsWiMQ.png'},
              {title: 'Bootswatch', body: 'Great way to use colors', author: 'Michelle', votes: 0, imageUrl: 'https://pbs.twimg.com/profile_images/504444173521403905/n6FsWiMQ.png'}
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
    // <div ng-show="linkform">
    			template: `

        <section class="linkform">

          <button class="btn btn-primary" ng-click="formOpen = !formOpen">New Post</button>
            <div ng-show="formOpen">

            <form novalidate name="$ctrl.linkform" ng-submit=$ctrl.addlink() >

           <div class="form-group"
              ng-class= "{'has-error' : $ctrl.linkform.title.$invalid}">
                <label for="title">Title</label>
                <input ng-model="$ctrl.link.title" required type="text" class="form-control" name="title" id="title"  ng-minlength=3 ng-maxlength=20 required>
                <div class="error"
                ng-show="$ctrl.linkform.title.$dirty && $ctrl.linkform.title.$invalid">
                  <small class="error"
                  ng-show="$ctrl.linkform.title.$error.required">
                      Your title is required.
                  </small>
                  <small class="error"
                    ng-show="$ctrl.linkform.title.$error.minlength">
                    Your title is required to be at least 3 characters
                  </small>
                  <small class="error"
                     ng-show="$ctrl.linkform.title.$error.maxlength">
                     Your title cannot be longer than 20 characters
                  </small>
            </div>

            <div class="form-group"
               ng-class= "{'has-error' : $ctrl.linkform.body.$invalid}">
                 <label for="body">Body</label>
                 <input ng-model="$ctrl.link.body" required type="text" class="form-control" name="body" id="body"  ng-minlength=3 ng-maxlength=200 required>
                 <div class="error"
                 ng-show="$ctrl.linkform.body.$dirty && $ctrl.linkform.body.$invalid">
                   <small class="error"
                   ng-show="$ctrl.linkform.body.$error.required">
                       Your body is required.
                   </small>
                   <small class="error"
                     ng-show="$ctrl.linkform.body.$error.minlength">
                     Your body is required to be at least 3 characters
                   </small>
                   <small class="error"
                      ng-show="$ctrl.linkform.body.$error.maxlength">
                      Your body cannot be longer than 20 characters
                   </small>
             </div>

             <div class="form-group"
                ng-class= "{'has-error' : $ctrl.linkform.author.$invalid}">
                  <label for="author">Author</label>
                  <input ng-model="$ctrl.link.author" required type="text" class="form-control" name="author" id="author"  ng-minlength=3 ng-maxlength=20 required>
                  <div class="error"
                  ng-show="$ctrl.linkform.author.$dirty && $ctrl.linkform.author.$invalid">
                    <small class="error"
                    ng-show="$ctrl.linkform.author.$error.required">
                        Your author is required.
                    </small>
                    <small class="error"
                      ng-show="$ctrl.linkform.author.$error.minlength">
                      Your author is required to be at least 3 characters
                    </small>
                    <small class="error"
                       ng-show="$ctrl.linkform.author.$error.maxlength">
                       Your author cannot be longer than 20 characters
                    </small>
              </div>

              <div class="form-group"
                 ng-class= "{'has-error' : $ctrl.linkform.imageUrl.$invalid}">
                   <label for="imageUrl">Image Url</label>
                   <input ng-model="$ctrl.link.imageUrl" required type="text" class="form-control" name="imageUrl" id="imageUrl"  ng-minlength=3 required>
                   <div class="error"
                   ng-show="$ctrl.linkform.imageUrl.$dirty && $ctrl.linkform.imageUrl.$invalid">
                     <small class="error"
                     ng-show="$ctrl.linkform.imageUrl.$error.required">
                         Your imageUrl is required.
                     </small>
                     <small class="error"
                       ng-show="$ctrl.linkform.imageUrl.$error.minlength">
                       Your imageUrl is required to be at least 3 characters
                     </small>
               </div>

              <button class="btn btn-default" type="submit"x>Add Link</button>
            </form>
            </div>

            </section>


          <h1> All Links </h1>


                  <div class="filter container">
                  <input ng-model="filterLinks" type="text" class="form-control" name="filter" id="filter" >
                  <button class="btn btn-default">Filter</button>
                  </div>

            <section class="list containter .col-md-12">
              <div ng-repeat="link in $ctrl.links | filter:filterLinks">

              <div class="container panel">
              <div class="row">

                  <div class=".col-md-4">
                    <h2>Title: {{link.title}}</h2>
                    <h3>Author: {{link.author}}</h3>
                    <p>Body: {{link.body}}</p>
                    <p> Votes: {{link.votes}}</p>
                    <button class="btn btn-info" ng-click="$ctrl.increaseVotes($event, link)">&uarr;</button>
                    <button class="btn btn-success" ng-click="$ctrl.decreaseVotes($event, link)">&darr;</button>
                    <button ng-click="$ctrl.deletelink($event, link)" class="btn btn-warning">Delete</button>
                  </div>

                  <div class=".col-md-4">
                    <img src={{link.imageUrl}} width="50">
                  </div>

              </div>
              </div>

            </section>




    			`
    // <input type="submit" value="submit" ng-click="$ctrl.updateData(username, password, email, zip)">

 })
