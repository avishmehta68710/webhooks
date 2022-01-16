const { parseEvents } = require('./parseEvents');
const { parseActors } = require('./parseActors');
const { parseActorPlatforms } = require('./parseActorPlatforms');
const { parseTasks } = require('./parseTasks');
const { size } = require('lodash');
const events = require('../../utils/events');
const KEY = 'monday';
const EVENTS = events.MONDAY_EVENTS;

const commonFilter = (actionFn) => {
	return (req, receiver, actors, actorPlatforms, events) => {
		// console.log(req.body, req.body.event.value, req.body.event.previousValue);
		let body = req.body;
		const event = EVENTS.includes(body.event.type);
		body = { ...body, event_type: req.body.event.type };
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
