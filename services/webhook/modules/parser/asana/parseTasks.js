const fetchData = require('../../utils/fetcher/Asana');
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
	const taskData = await fetchData.getTask(body.events[0].resource.gid);
	const task = {
		refId: body.events[0].resource.gid,
		platformKey: key,
		actorPlatformId: actorPlatforms[0].id,
		actorId: actors.length > 0 ? actors[0].id : null,
	};
	switch (body.events[0].change.field) {
		case 'name':
			task.name = taskData.name;
			task.dueDate = taskData.due_at;
			task.status = 'Changed';
			task.taskType = TASK_TYPE.TASK_UPDATED;
			break;
		case 'custom_fields':
			task.name = taskData.name;
			task.dueDate = taskData.due_at;
			task.status = await fetchData.getCustomFields(
				body.events[0].change.new_value.gid,
				body.events[0].change.new_value.enum_value.gid
			);
			task.taskType =
				task.status.split(' :')[0] === 'Status'
					? TASK_TYPE.TASK_STATUS_UPDATED
					: TASK_TYPE.TASK_PRIORITY_UPDATED;
			break;
		case 'assignee':
			task.name = taskData.name;
			task.dueDate = taskData.due_at;
			task.status = 'Changed';
			task.taskType = TASK_TYPE.TASK_ASSIGNEE_UPDATED;
			break;
	}
	tasks.push(task);
	return tasks;
}

module.exports = { parseTasks };
