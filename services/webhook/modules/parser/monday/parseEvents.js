const bodyParser = require('body-parser');
const { EVENT_TYPES, EVENT_MODULES } = require('../../utils/constant');
function parseEvents({ receiver, actors, actorPlatforms, key, body }) {
	let message;
	let eventType;

	switch (body.event.type) {
		case 'create_pulse':
			eventType = EVENT_TYPES.CREATE;
			message = `The task named ${body.event.pulseName} has been created`;
			break;
		case 'update_name':
			eventType = EVENT_TYPES.UPDATES;
			message = `The Name of the task has been Updated from ${body.event.previousValue.name} to ${body.event.value.name}`;
			break;
		case 'update_column_value':
			switch (body.event.columnTitle) {
				case 'Person':
					eventType = EVENT_TYPES.UPDATES;
					message = `The task assignee has been Updated`;
					break;
				case 'Date':
					eventType = EVENT_TYPES.UPDATES;
					message = `The task due date has been Updated to ${body.event.value.date}`;
					break;
				case 'Status':
					eventType = EVENT_TYPES.UPDATES;
					message = `The task status has been Updated to ${body.event.value.label.text}`;
					break;
				case 'Subitems':
					eventType = EVENT_TYPES.DELETE;
					message = `The task has been Deleted`;
					break;
				case 'Owner':
					eventType = EVENT_TYPES.UPDATES;
					message = `The assignee has been added to Subtask Named ${body.event.pulseName}`;
					break;
				default:
					message = 'New Event';
					break;
			}
	}
	const events = [];
	const event = {
		platformKey: key,
		eventType: eventType,
		data: body.event,
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
