const {
	TASK_TYPE,
	EVENT_MODULES,
	EVENT_TYPES,
} = require('../../utils/constant');

async function parseTasks({
	receiver,
	actors,
	actorPlatforms,
	key,
	body,
	events,
}) {
	if (events[0].modules !== EVENT_MODULES.TASK) {
		return [];
	}
	let tasks = [];
	const task = {
		refId: body.event.triggerUuid,
		platformKey: key,
		actorPlatformId: actorPlatforms[0].id,
		actorId: actors.length > 0 ? actors[0].id : null,
	};
	switch (body.event.type) {
		case 'create_pulse':
			task.name = body.event.pulseName;
			task.dueDate =
				body.event.value === undefined
					? null
					: body.event.value.date !== null
					? body.event.value.date
					: null;
			task.status = 'Created';
			task.taskType = TASK_TYPE.TASK_CREATED;
			break;
		case 'update_name':
			task.name = body.event.value.name;
			task.dueDate =
				body.event.value.date !== undefined ? body.event.value.date : null;
			task.status = 'Updated';
			task.taskType = TASK_TYPE.TASK_UPDATED;
			break;
		case 'update_column_value':
			task.name = body.event.pulseName;
			task.dueDate =
				body.event.value.date !== undefined ? body.event.value.date : null;
			task.status = 'Updated';
			task.taskType = TASK_TYPE.TASK_ASSIGNEE_UPDATED;
			break;
	}
	tasks.push(task);
	return tasks;
}

module.exports = { parseTasks };
