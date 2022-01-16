const { EVENT_TYPES, EVENT_MODULES } = require('../../utils/constant');
function parseEvents({ receiver, actors, actorPlatforms, key, body }) {
	let message;
	let data;
	let eventType;
	const { model, action } = body;
	data = { model, action };
	switch (body.action.type) {
		case 'updateCard':
			eventType = EVENT_TYPES.CREATE;
			let txt = msg.split('_');
			let msg = txt[1] + ' the ';
			for (let i = 2; i < txt.length; i++) {
				msg += txt[i] + ' ';
			}
			console.log(msg);
			message = `${body.action.memberCreator.username} has ${msg} `;
			break;
		case 'createCard':
			eventType = EVENT_TYPES.CREATE;
			message = `The Card has been Created by ${body.action.memberCreator.username}`;
			break;
		case 'addMemberToCard':
			eventType = EVENT_TYPES.CREATE;
			message = `The User has been Added by${body.action.memberCreator.username}`;
			break;
		default:
			message = 'New event';
	}
	const events = [];
	const event = {
		platformKey: key,
		eventType: eventType,
		data,
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
