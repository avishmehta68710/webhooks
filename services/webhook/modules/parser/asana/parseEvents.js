const { EVENT_TYPES, EVENT_MODULES } = require('../../utils/constant');
function parseEvents({ receiver, actors, actorPlatforms, key, body }) {
	let message;
	let eventType;

	switch (body.events[0].change.field) {
		case 'name':
			eventType = EVENT_TYPES.CREATE;
			message = `The task has been ${body.events[0].action}`;
			break;
		case 'assignee':
			eventType = EVENT_TYPES.ASSIGN;
			message = `The User has been ${body.events[0].action}`;
			break;
		case 'custom_fields':
			eventType = EVENT_TYPES.UPDATE;
			message = `The Fields have been ${body.events[0].action}`;
			break;
	}
	const events = [];
	const event = {
		platformKey: key,
		eventType: eventType,
		data: body.events,
		receiverId: receiver.id,
		actorId: actors.length !== 0 ? actors[0].id : null,
		actorPlatformId: actorPlatforms[0].id,
		modules: EVENT_MODULES.TASK,
		message,
	};

	events.push(event);
	return events;
}
module.exports = { parseEvents };
