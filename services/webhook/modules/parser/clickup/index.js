const { parseEvents } = require('./parseEvents');
const { parseActors } = require('./parseActors');
const { parseActorPlatforms } = require('./parseActorPlatforms');
const { parseTasks } = require('./parseTasks');
const { size } = require('lodash');
const events = require('../../utils/events');
const KEY = 'clickUp';
const EVENTS = events.CLICKUPEVENTS;

const commonFilter = (actionFn) => {
	return (req, receiver, actors, actorPlatforms, events) => {
		let body = req.body;
		const event = EVENTS.includes(req.body.event);
		body = { ...body, event_type: req.body.event };
		if (event === false) {
			console.log('events does not exist', true);
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
