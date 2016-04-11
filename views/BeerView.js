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
    this.model.destroy();
  }

});