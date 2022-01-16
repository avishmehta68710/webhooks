const fetchDueDate = require('../../utils/fetcher/Trello');
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
	const data = await fetchDueDate.fetchDueDate(body.action.id);
	const task = {
		refId: body.action.id,
		platformKey: key,
		actorPlatformId: actorPlatforms[0].id,
		actorId: actors.length > 0 ? actors[0].id : null,
	};
	switch (body.action.type) {
		case 'updateCard':
			task.name = body.model.name;
			task.dueDate = data.due;
			task.status = body.action.data.list.name;
			task.taskType = TASK_TYPE.TASK_UPDATED;
			break;
		case 'createCard':
			task.name = body.model.name;
			task.dueDate = data.due;
			task.status = body.action.data.list.name;
			task.taskType = TASK_TYPE.TASK_CREATED;
			break;
		case 'addMemberToCard':
			task.name = body.model.name;
			task.dueDate = data.due;
			task.status = body.action.data.list.name;
			task.taskType = TASK_TYPE.TASK_ASSIGNEE_UPDATED;
			break;
	}
	tasks.push(task);
	return tasks;
}

module.exports = { parseTasks };
