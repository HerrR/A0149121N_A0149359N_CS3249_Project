import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Events = new Mongo.Collection('events');

if (Meteor.isServer) {
	Meteor.publish('events', function tasksPublication() {
		return Events.find();
	});	
}