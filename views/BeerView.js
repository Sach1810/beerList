BeerView = Backbone.View.extend({

  events:{
    'click .remove':'destroy',
    'click .edit': 'toggle',
    'click .submit1': 'edit',
    'click .rate': 'averageRating'
  },

  template: Handlebars.compile($('#post-template').html()),
  initialize: function () {
    this.listenTo(this.model, 'destroy', this.remove);
    this.listenTo(this.model, 'change', this.render);
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },

  destroy: function(){
    this.model.destroy();
  },

  toggle:function(){
  this.$('.toggle').toggleClass("show");
  },

  edit:function(){
    this.$('.toggle').toggleClass("show");
    
    var name = $('#name1').val();
    var style = $('#style1').val();
    var abv = $('#abv1').val();
    var url = $('#image1').val(); 

    this.model.set('name', name);
    this.model.set('style', style);
    this.model.set('abv', abv);
    this.model.set('url', url);
  },

  averageRating: function(){
  var length = this.model.get('averageRating').length

    if (length){
      console.log("add rating");
    } else {
    this.model.get('averageRating').push(this.model.get('rating'));
    }

  }

});