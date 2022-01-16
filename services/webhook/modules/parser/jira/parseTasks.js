const {
	TASK_TYPE,
	EVENT_MODULES,
	EVENT_TYPES,
} = require('../../utils/constant');

function parseTasks({
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
		platformKey: key,
		actorPlatformId: actorPlatforms[0].id,
		actorId: actors.length > 0 ? actors[0].id : null,
	};
	switch (body.event_type) {
		case 'jira:issue_created':
			task.refId = body.issue.id;
			task.name = body.issue.fields.summary;
			task.dueDate = body.issue.fields.duedate;
			task.status = body.changelog.items[2].toString;
			task.taskType = TASK_TYPE.ISSUE_CREATED;
			break;
		case 'jira:issue_updated':
			task.refId = body.issue.id;
			task.name = body.issue.fields.summary;
			task.dueDate = body.issue.fields.duedate;
			task.status = body.changelog.items[2].toString;
			task.taskType = TASK_TYPE.ISSUE_UPDATED;
			break;
		case 'jira:issue_deleted':
			task.refId = body.issue.id;
			task.name = body.issue.fields.summary;
			task.dueDate = body.issue.fields.duedate;
			task.status = body.issue.fields.status.name;
			task.taskType = TASK_TYPE.ISSUE_DELETED;
			break;
		case 'worklog_created':
			task.refId = body.worklog.id;
			task.status = 'Created';
			task.dueDate = body.worklog.updated;
			task.taskType = TASK_TYPE.WORKLOG_CREATED;
			break;
		case 'worklog_updated':
			task.refId = body.worklog.id;
			task.status = 'Updated';
			task.dueDate = body.worklog.updated;
			task.taskType = TASK_TYPE.WORKLOG_UPDATED;
			break;
		case 'worklog_deleted':
			task.refId = body.worklog.id;
			task.status = 'Deleted';
			task.dueDate = body.worklog.updated;
			task.taskType = TASK_TYPE.WORKLOG_DELETED;
			break;
	}
	tasks.push(task);
	return tasks;
}

module.exports = { parseTasks };
