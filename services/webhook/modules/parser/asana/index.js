const { parseEvents } = require('./parseEvents');
const { parseActors } = require('./parseActors');
const { parseActorPlatforms } = require('./parseActorPlatforms');
const { parseTasks } = require('./parseTasks');
const { size } = require('lodash');
const events = require('../../utils/events');
const KEY = 'asana';
const EVENTS = events.ASANAEVENTS;

const commonFilter = (actionFn) => {
	return (req, receiver, actors, actorPlatforms, events) => {
		let body = req.body;
		const event = EVENTS.includes(body.events[0].change.field);
		body = { ...body, event_type: req.body.event };
		if (event === false) {
			return [];
		}
		return actionFn({
			receiver,
			actors,
			actorPlatforms,
			key: KEY,
			body,
			events,
		});
	};
};

module.exports = {
	KEY,
	EVENTS,
	parseEvents: commonFilter(parseEvents),
	parseActors: commonFilter(parseActors),
	parseActorPlatforms: commonFilter(parseActorPlatforms),
	parseTasks: commonFilter(parseTasks),
};
