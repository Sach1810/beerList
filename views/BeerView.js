BeerView = Backbone.View.extend({

  events:{
    'click .remove':'destroy'
  },

  template: Handlebars.compile($('#post-template').html()),
  initialize: function () {
    this.listenTo(this.model, 'destroy', this.remove);
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },

  destroy: function(){
    console.log(beerCollection.toJSON());
    console.log(this.model.toJSON());

    this.model.destroy();
    console.log(this.model.toJSON());
    console.log(beerCollection.toJSON());
  }

});