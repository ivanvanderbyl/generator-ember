var App = Em.Application.create();

App.reopen({
  Store: DS.Store.extend({
    revision: 11,
    adapter: DS.FixtureAdapter.create()
  })
});

App.Router.map(function() {
  this.resource('contacts', function() {
    this.resource('contact', {path: '/:contact_id'} function() {
      this.route('edit')
    });
  });
});

App.IndexRoute = Ember.Route.extend({
  setupController: function() {
    console.log("INDEX")
  }
})
