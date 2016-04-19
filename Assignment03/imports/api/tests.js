import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';

import { Events } from './events.js';
 
const event = Factory.create('event');

Factory.define('event', Event, {
	title: 'party',
    organiser: 'katie',
    contact: 'contact',
    eventDate: 'april',
    tags: 'fun',
    venue: 'somewhere',
    price: 'hella',
    agenda: 'fun stuff',
   	hits: 10
});

describe('events', function() {
	beforeEach(function() {
		const newEvent = Factory.create('event');
	});

	it('created new event', function() => {
		const addEvent = Meteor.server.method_handlers['events.insert'];
		assert.equal(events.size(), 1);
	})
})