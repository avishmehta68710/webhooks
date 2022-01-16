const { EVENT_TYPES } = require('../../utils/constant');
function parseEvents({ receiver, actors, actorPlatforms, key, body }) {
	let message;
	console.log('parseEvents', body);
	const { data, installation } = body;
	let eventType;
	switch (body.event_type) {
		case 'installation':
			eventType = EVENT_TYPES.INSTALLATION;
			message = `Integration has been ${body.action} by ${body.actor.name} `;
			break;
		case 'uninstallation':
			eventType = EVENT_TYPES.UNINSTALLATION;
			message = `Integration has been ${body.action} by ${body.actor.name}`;
			break;
		case 'event_alert':
			eventType = EVENT_TYPES.EVENT_ALERT;
			message = `Issue Alerts has been ${body.action} by ${body.actor.name}`;
			break;
		case 'metric_alert':
			eventType = EVENT_TYPES.METRIC_ALERT;
			message = `Metric Alert is ${body.action} by ${body.actor.name} `;
			break;
		case 'issue':
			eventType = EVENT_TYPES.ISSUE;
			message = `Issue has been ${body.action} by ${body.actor.name} on ${body.data.issue.project.name}`;
			break;
		case 'error': // only for bushiness plans and above
			eventType = EVENT_TYPES.ERROR;
			message = `Error has been created by ${body.actor.name} `;
			break;
		default:
			message = 'New event';
	}
	const events = [];
	const event = {
		platformKey: key,
		eventType: eventType,
		data: {
			data,
			installation,
		},
		receiverId: receiver.id,
		actorId: actors.length !== 0 ? actors[0].id : null,
		actorPlatformId: actorPlatforms[0].id,
		message,
	};

	events.push(event);
	return events;
}
module.exports = { parseEvents };
