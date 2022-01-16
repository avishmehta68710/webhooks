const { EVENT_TYPES, EVENT_MODULES } = require('../../utils/constant');
function parseEvents({ receiver, actors, actorPlatforms, key, body }) {
	let message = '';
	let data;
	let eventType;
	const user =
		body.history_items !== undefined ? body.history_items[0].user.username : '';
	const { history_items } = body;
	switch (body.event_type) {
		case 'taskCreated':
			eventType = EVENT_TYPES.CREATE;
			message = `Task Created by ${user}`;
			break;
		case 'taskUpdated':
			eventType = EVENT_TYPES.UPDATES;
			message = `Task ${body.history_items[0].field} Updated by ${user}`;
			break;
		case 'taskDeleted':
			eventType = EVENT_TYPES.DELETE;
			message = `Task Deleted`;
			break;
		case 'taskPriorityUpdated':
			eventType = EVENT_TYPES.UPDATES;
			message = `Task Priority updated by ${user}`;
			break;
		case 'taskStatusUpdated':
			eventType = EVENT_TYPES.UPDATES;
			message = `Task Status Updated by${user}`;
			break;
		case 'taskAssigneeUpdated':
			eventType = EVENT_TYPES.UPDATES;
			message = `Task Assignee has been Updated by ${user} `;
			break;
		case 'taskDueDateUpdated':
			eventType = EVENT_TYPES.UPDATES;
			message = `Task Due Date Updated by ${user}`;
			break;
		case 'taskTagUpdated':
			eventType = EVENT_TYPES.UPDATES;
			message = `Task Tag has been ${body.history_items[0].field} by ${user}`;
			break;
		case 'taskTimeTrackedUpdated':
			eventType = EVENT_TYPES.UPDATES;
			message = `Task Time Tracked has been Updated by ${user}`;
			break;
		case 'taskTimeEstimateUpdated':
			eventType = EVENT_TYPES.UPDATES;
			message = `Task Time Estimate has been Updated by ${user}`;
			break;
		case 'taskMoved':
			eventType = EVENT_TYPES.TASK_MOVED;
			message = `Task has been moved by ${user}`;
			break;
		case 'taskCommentPosted':
			eventType = EVENT_TYPES.COMMENT;
			message = `Task Comment has been posted by ${user}`;
			break;
		case 'taskCommentUpdated':
			eventType = EVENT_TYPES.UPDATES;
			message = `Task Comment has been updated by ${user}`;
			break;
		case 'listCreated': //todo
			eventType = EVENT_TYPES.CREATE;
			message = `List Created`;
			break;
		case 'listUpdated':
			eventType = EVENT_TYPES.UPDATES;
			message = `List ${body.history_items[0].field} Updated by ${user}`;
			break;
		case 'listDeleted': //todo
			eventType = EVENT_TYPES.DELETE;
			message = `List has been Deleted`;
			break;
		case 'folderCreated': //todo
			eventType = EVENT_TYPES.CREATE;
			message = `Folder has been Created`;
			break;
		case 'folderUpdated': //todo
			eventType = EVENT_TYPES.UPDATES;
			message = `Folder has been Updated`;
			break;
		case 'folderDeleted': //todo
			eventType = EVENT_TYPES.DELETE;
			message = `Folder has been Deleted`;
			break;
		case 'spaceCreated': //todo
			eventType = EVENT_TYPES.CREATE;
			message = `Space has been Created`;
			break;
		case 'spaceUpdated': //todo
			eventType = EVENT_TYPES.UPDATES;
			message = `Space has been Updated`;
			break;
		case 'spaceDeleted': //todo
			eventType = EVENT_TYPES.DELETE;
			message = `Space has been Deleted`;
			break;
		case 'goalCreated':
			eventType = EVENT_TYPES.CREATE;
			message = `Goal has been Created by ${user}`;
			break;
		case 'goalUpdated':
			eventType = EVENT_TYPES.UPDATES;
			message = `Goal ${body.history_items[0].field} Updated by ${user}`;
			break;
		case 'goalDeleted':
			eventType = EVENT_TYPES.DELETE;
			message = `Goal has been Deleted by ${user}`;
			break;
		case 'keyResultCreated':
			eventType = EVENT_TYPES.CREATE;
			message = `Key Result has been Created by ${user}`;
			break;
		case 'keyResultUpdated':
			eventType = EVENT_TYPES.UPDATES;
			message = `Key Result ${body.history_items[0].field} Updated by ${user}`;
			break;
		case 'keyResultDeleted':
			eventType = EVENT_TYPES.DELETE;
			message = `Key Result has been Deleted by ${user}`;
			break;
		default:
			message = 'New event';
	}
	// console.log("events types", EVENT_TYPES);
	const events = [];
	const event = {
		platformKey: key,
		eventType: eventType,
		data: { history_items },
		receiverId: receiver.id,
		actorId: actors.length !== 0 ? actors[0].id : null,
		modules: EVENT_MODULES.TASK,
		actorPlatformId: actorPlatforms[0].id,
		message,
	};

	events.push(event);
	return events;
}
module.exports = { parseEvents };
