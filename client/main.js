import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.sample.helpers({
  user: function() {
    return 'Faysal Ahmed';
  },
  list: function() {
    return Players.find({});
  }

});


Template.sample.events({
  'submit #playerForm' : function(event, template) {
    event.preventDefault();
    var player = $('#playerName').val();

    console.log(player);

    Players.insert({
      name: player
    });
  }
});

// Players.find({}).fetch()