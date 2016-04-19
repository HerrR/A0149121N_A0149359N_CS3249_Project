import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Events = new Mongo.Collection('events', {idGeneration: "MONGO"});

if (Meteor.isServer) {
	Meteor.publish('events', function tasksPublication() {
		return Events.find();
	});	
};

Meteor.methods({
  'events.insert'(details) {
    // check(text, String);

    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Events.insert({
    	title: details.title,
    	organiser: details.organiser,
    	contact: details.contact,
    	eventDate: details.dateTime,
    	displayStart: details.displayStart,
    	displayEnd: details.displayEnd,
    	description: details.description,
    	tags: details.tags,
    	venue: details.venue,
    	price: details.price,
    	agenda: details.agenda,
    	createdAt: details.createdAt, 
    	createdBy: details.createdBy,
    	hits: 0
    });
  },

  'events.incrementHitCount'(eventID){
  	check(eventID, String);
  	let idObject = new Meteor.Collection.ObjectID(eventID);
  	let updatedHits = Events.findOne(idObject).hits + 1;
  	Events.update(idObject, { $set: { hits: updatedHits } });
  },

  'events.remove'(eventID){
  	check(eventID, String);
  	let idObject = new Meteor.Collection.ObjectID(eventID);
  	Events.remove(idObject);
  }
});