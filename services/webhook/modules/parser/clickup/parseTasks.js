const { fetchToken } = require('../../utils/fetchToken');
const moment = require('moment');
const axios = require('axios');
const fetchData = require('../../utils/fetcher/clickUp');

const {
	TASK_TYPE,
	EVENT_MODULES,
	EVENT_TYPES,
} = require('../../utils/constant');

function epochToLocalTime(epoch) {
	const date = new Date(0);
	const datetime = date.setUTCSeconds(epoch / 1000);
	// console.log(date);
	return date;
}

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
	const clickUpTask = await fetchData(body);
	switch (body.event) {
		case 'taskCreated':
			task.name = clickUpTask.data.name;
			task.dueDate = moment.format(clickUpTask.data.due_date);
			task.status = clickUpTask.data.status.status;
			task.taskType = TASK_TYPE.TASK_CREATED;
			break;
		case 'taskUpdated':
			task.name = clickUpTask.data.name;
			task.taskType = TASK_TYPE.TASK_UPDATED;
			task.dueDate =
				clickUpTask.data.dueDate !== undefined
					? moment.format(clickUpTask.data.due_date)
					: moment.format(clickUpTask.data.date_updated);
			task.status = clickUpTask.data.status.status;
			break;
		case 'taskStatusUpdated':
			task.status = body.history_items[0].after.status;
			task.taskType = TASK_TYPE.TASK_STATUS_UPDATED;
			task.name = clickUpTask.data.name;
			task.dueDate =
				clickUpTask.data.dueDate !== undefined
					? moment.format(clickUpTask.data.due_date)
					: moment.format(clickUpTask.data.date_updated);
			break;
		case 'taskDueDateUpdated':
			task.dueDate =
				clickUpTask.data.dueDate !== undefined
					? moment.format(clickUpTask.data.due_date)
					: moment.format(clickUpTask.data.date_updated);
			task.taskType = TASK_TYPE.TASK_DUE_DATE_UPDATED;
			task.name = clickUpTask.data.name;
			task.status = clickUpTask.data.status.status;
			break;
		case 'taskPriorityUpdated':
			task.status = `${body.history_items[0].after.priority} priority`;
			task.taskType = TASK_TYPE.TASK_PRIORITY_UPDATED;
			task.name = clickUpTask.data.name;
			task.dueDate =
				clickUpTask.data.dueDate !== undefined
					? moment.format(clickUpTask.data.due_date)
					: moment.format(clickUpTask.data.date_updated);
			break;
		case 'taskAssigneUpdated':
			task.status = body.history_items[0].field;
			task.taskType = TASK_TYPE.TASK_ASSIGNEE_UPDATED;
			task.name = clickUpTask.data.name;
			task.dueDate =
				clickUpTask.data.dueDate !== undefined
					? moment.format(clickUpTask.data.due_date)
					: moment.format(clickUpTask.data.date_updated);
			break;
	}
	tasks.push(task);
	return tasks;
}

module.exports = { parseTasks };

// taskCreated, updated, statusupdated, due date,
// priorityupdated, assignee
