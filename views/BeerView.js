BeerView = Backbone.View.extend({
  el: '.displayBeer',

  template: Handlebars.compile($('#post-template').html()),

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  }

});