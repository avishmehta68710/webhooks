const { parseEvents } = require('./parseEvents');
const { parseActors } = require('./parseActors');
const { parseActorPlatforms } = require('./parseActorPlatforms');
const { parseTasks } = require('./parseTasks');
const { size } = require('lodash');
const events = require('../../utils/events');
const KEY = 'trello';
const EVENTS = events.TRELLOEVENTS;

const commonFilter = (actionFn) => {
	return (req, receiver, actors, actorPlatforms, events) => {
		let body = req.body;
		const event = EVENTS.includes(body.action.type);
		body = { ...body, event_type: req.body.action.type };
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
