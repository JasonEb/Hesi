window.Hesigram = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		new Hesigram.Routers.Router({
			$rootEl : $("#content")
		})
    console.log('Get back to work!');
  }
};

$(document).ready(function(){
  Hesigram.initialize();
});
