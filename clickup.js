// taskcreated
const taskcreated = {
	event: 'taskCreated',
	history_items: [
		{
			id: '2548666207230360195',
			type: 1,
			date: '1627708483574',
			field: 'status',
			parent_id: '31029533',
			data: [Object],
			source: null,
			user: [Object],
			before: [Object],
			after: [Object],
		},
		{
			id: '2548666207213582978',
			type: 1,
			date: '1627708483574',
			field: 'task_creation',
			parent_id: '31029533',
			data: {},
			source: null,
			user: [Object],
			before: null,
			after: null,
		},
	],
	task_id: 'au23gy',
	webhook_id: '587836c6-7c68-469e-ac03-188b6d57c286',
	event_type: 'taskCreated',
};
//task updated
const taskupdated = {
	event: 'taskStatusUpdated',
	history_items: [
		{
			id: '2548666207230360195',
			type: 1,
			date: '1627708483574',
			field: 'status',
			parent_id: '31029533',
			data: [Object],
			source: null,
			user: [Object],
			before: [Object],
			after: [Object],
		},
	],
	task_id: 'au23gy',
	webhook_id: '587836c6-7c68-469e-ac03-188b6d57c286',
	event_type: 'taskStatusUpdated',
};
// task deleted
const taskdeleted = {
	event: 'taskDeleted',
	task_id: 'au23gy',
	webhook_id: '587836c6-7c68-469e-ac03-188b6d57c286',
	event_type: 'taskDeleted',
};
// task priority updated
const taskpriorityupdated = {
	event: 'taskPriorityUpdated',
	history_items: [
		{
			id: '2548668438331653979',
			type: 1,
			date: '1627708616556',
			field: 'priority',
			parent_id: '31029533',
			data: {},
			source: null,
			user: [Object],
			before: [Object],
			after: [Object],
		},
	],
	task_id: 'any878',
	webhook_id: '587836c6-7c68-469e-ac03-188b6d57c286',
	event_type: 'taskPriorityUpdated',
};
// task status updated
const taskstatusupdated = {
	event: 'taskStatusUpdated',
	history_items: [
		{
			id: '2548669223320797343',
			type: 1,
			date: '1627708663333',
			field: 'status',
			parent_id: '31029533',
			data: [Object],
			source: null,
			user: [Object],
			before: [Object],
			after: [Object],
		},
	],
	task_id: 'any878',
	webhook_id: '587836c6-7c68-469e-ac03-188b6d57c286',
	event_type: 'taskStatusUpdated',
};
// task assignee updated
const taskassigneeupdated = {
	event: 'taskAssigneeUpdated',
	history_items: [
		{
			id: '2557476848447642829',
			type: 1,
			date: '1628233638701',
			field: 'assignee_rem',
			parent_id: '31029533',
			data: {},
			source: null,
			user: {
				id: 5983330,
				username: 'Avish Mehta',
				email: 'avish@logicwind.co',
				color: '#ff7fab',
				initials: 'AM',
				profilePicture:
					'https://attachments.clickup.com/profilePictures/5983330_9mg.jpg',
			},
			before: {
				id: 7855159,
				username: 'John Doe',
				email: 'siddharth.logicwind@gmail.com',
				color: '#ff7fab',
				initials: 'JD',
				profilePicture: null,
			},
		},
	],
	task_id: 'anzc7w',
	webhook_id: '587836c6-7c68-469e-ac03-188b6d57c286',
	event_type: 'taskAssigneeUpdated',
};
// task tag updated
const tasktagupdated = {
	event: 'taskTagUpdated',
	history_items: [
		{
			id: '2548670518370878360',
			type: 1,
			date: '1627708740526',
			field: 'tag',
			parent_id: '31029533',
			data: {},
			source: null,
			user: [Object],
			before: null,
			after: [Array],
		},
	],
	task_id: 'anzc7w',
	webhook_id: '587836c6-7c68-469e-ac03-188b6d57c286',
	event_type: 'taskTagUpdated',
};
// due date updated
const dueupdated = {
	event: 'taskDueDateUpdated',
	history_items: [
		{
			id: '2548672631327016693',
			type: 1,
			date: '1627708866459',
			field: 'due_date',
			parent_id: '31029533',
			data: [Object],
			source: null,
			user: [Object],
			before: null,
			after: '1626220800000',
		},
	],
	task_id: 'anzc7w',
	webhook_id: '587836c6-7c68-469e-ac03-188b6d57c286',
	event_type: 'taskDueDateUpdated',
};
// task comment posted
const taskcommentposted = {
	event: 'taskCommentPosted',
	history_items: [
		{
			id: '2561918730116393883',
			type: 1,
			date: '1628498395407',
			field: 'comment',
			parent_id: '31029533',
			data: {},
			source: null,
			user: {
				id: 5983330,
				username: 'Avish Mehta',
				email: 'avish@logicwind.co',
				color: '#ff7fab',
				initials: 'AM',
				profilePicture:
					'https://attachments.clickup.com/profilePictures/5983330_9mg.jpg',
			},
			before: null,
			after: '181523155',
			comment: {
				id: '181523155',
				date: '1628498395407',
				parent: 'bv68dk',
				type: 1,
				comment: [
					{ text: 'awdaw', attributes: {} },
					{
						text: '\n',
						attributes: { 'block-id': 'block-934d992c-0b77-4b0f-9a07-40065284c75d' },
					},
				],
				text_content: 'aw\n',
				x: null,
				y: null,
				image_y: null,
				image_x: null,
				page: null,
				comment_number: null,
				page_id: null,
				page_name: null,
				view_id: null,
				view_name: null,
				team: null,
				user: [Object],
				new_thread_count: 0,
				new_mentioned_thread_count: 0,
				email_attachments: [],
				threaded_users: [],
				threaded_replies: 0,
				threaded_assignees: 0,
				threaded_assignees_members: [],
				threaded_unresolved_count: 0,
				thread_followers: [Array],
				group_thread_followers: [],
				reactions: [],
				emails: [],
			},
		},
	],
	task_id: 'anzc7w',
	webhook_id: '587836c6-7c68-469e-ac03-188b6d57c286',
	event_type: 'taskCommentPosted',
};
// task comment updated
const taskcommentupdated = {
	event: 'taskCommentUpdated',
	history_items: [
		{
			id: '2548673412138649600',
			type: 1,
			date: '1627708913014',
			field: 'comment',
			parent_id: '31029533',
			data: {},
			source: null,
			user: [Object],
			before: null,
			after: '136198807',
			comment: [Object],
		},
	],
	task_id: 'anzc7w',
	webhook_id: '587836c6-7c68-469e-ac03-188b6d57c286',
	event_type: 'taskCommentUpdated',
};
// task estimate time updated
const taskestimatetimeupdated = {
	event: 'taskTimeEstimateUpdated',
	history_items: [
		{
			id: '2548674269873818307',
			type: 1,
			date: '1627708964149',
			field: 'time_estimate',
			parent_id: '31029533',
			data: [Object],
			source: null,
			user: [Object],
			before: null,
			after: '10800000',
		},
	],
	task_id: 'anzc7w',
	webhook_id: '587836c6-7c68-469e-ac03-188b6d57c286',
	event_type: 'taskTimeEstimateUpdated',
};
// task time tracked updated
const tasktimetrackedupdated = {
	event: 'taskTimeTrackedUpdated',
	history_items: [
		{
			id: '2548674802667867051',
			type: 1,
			date: '1627708995875',
			field: 'time_spent',
			parent_id: '31029533',
			data: [Object],
			source: null,
			user: [Object],
			before: null,
			after: [Object],
		},
	],
	task_id: 'anzc7w',
	webhook_id: '587836c6-7c68-469e-ac03-188b6d57c286',
	event_type: 'taskTimeTrackedUpdated',
};
// list created
const listcreated = {
	event: 'listCreated',
	list_id: '31101359',
	webhook_id: '587836c6-7c68-469e-ac03-188b6d57c286',
	event_type: 'listCreated',
};
// space updated
const spaceupdated = {
	event: 'spaceUpdated',
	space_id: '16927407',
	webhook_id: '587836c6-7c68-469e-ac03-188b6d57c286',
	event_type: 'spaceUpdated',
};
// list updated
const listupdated = {
	event: 'listUpdated',
	history_items: [
		{
			id: '7d33b81a-a0cc-428c-9c99-9a43a535051b',
			type: 6,
			date: '1627709083398',
			field: 'name',
			parent_id: '31101359',
			data: {},
			source: null,
			user: [Object],
			before: 'testt',
			after: 'testtffff',
		},
	],
	list_id: '31101359',
	webhook_id: '587836c6-7c68-469e-ac03-188b6d57c286',
	event_type: 'listUpdated',
};
// folder created
const foldercreated = {
	event: 'folderCreated',
	folder_id: '14344183',
	webhook_id: '587836c6-7c68-469e-ac03-188b6d57c286',
	event_type: 'folderCreated',
};
// folder updated
const folderupdated = {
	event: 'folderUpdated',
	folder_id: '14344183',
	webhook_id: '587836c6-7c68-469e-ac03-188b6d57c286',
	event_type: 'folderUpdated',
};
// folder deleted
const folderdeleted = {
	event: 'folderDeleted',
	folder_id: '14344183',
	webhook_id: '587836c6-7c68-469e-ac03-188b6d57c286',
	event_type: 'folderDeleted',
};
// list deleted
const listdeleted = {
	event: 'listDeleted',
	list_id: '31101360',
	webhook_id: '587836c6-7c68-469e-ac03-188b6d57c286',
	event_type: 'listDeleted',
};
// history items
const historyitems = [
	{
		id: '2548680960862445102',
		type: 1,
		date: '1627709362961',
		field: 'tag',
		parent_id: '31029533',
		data: {},
		source: null,
		user: {
			id: 5983330,
			username: 'Avish Mehta',
			email: 'avish@logicwind.co',
			color: '#ff7fab',
			initials: 'AM',
			profilePicture:
				'https://attachments.clickup.com/profilePictures/5983330_9mg.jpg',
		},
		before: null,
		after: [[Object]],
	},
];

const after = {
	id: '3',
	priority: 'normal',
	color: '#6fddff',
	orderindex: '3',
};

const taskupdated = {
	event: 'taskUpdated',
	history_items: [
		{
			id: '2557514293516036014',
			type: 1,
			date: '1628235870577',
			field: 'assignee_add',
			parent_id: '31029533',
			data: {},
			source: null,
			user: [Object],
			after: [
				{
					id: 5983330,
					username: 'Avish Mehta',
					email: 'avish@logicwind.co',
					color: '#ff7fab',
					initials: 'AM',
					profilePicture:
						'https://attachments.clickup.com/profilePictures/5983330_9mg.jpg',
				},
			],
		},
	],
	task_id: 'anzc7w',
	webhook_id: '4479934b-a14c-4dc1-ac69-a5e84acef1e9',
};

const clickupdata = {
	id: 'bv58c1',
	custom_id: null,
	name: 'fngnkgn34g',
	text_content: null,
	description: null,
	status: {
		id: 'p16927407_FPSlAGk4',
		status: 'to do',
		color: '#d3d3d3',
		orderindex: 0,
		type: 'open',
	},
	orderindex: '3.00000000000000000000000000000000',
	date_created: '1628238380635',
	date_updated: '1628238380635',
	date_closed: null,
	archived: false,
	creator: {
		id: 5983330,
		username: 'Avish Mehta',
		color: '#ff7fab',
		email: 'avish@logicwind.co',
		profilePicture:
			'https://attachments.clickup.com/profilePictures/5983330_9mg.jpg',
	},
	assignees: [],
	watchers: [],
	checklists: [],
	tags: [],
	parent: 'bv559z',
	priority: null,
	due_date: null,
	start_date: null,
	points: null,
	time_estimate: null,
	time_spent: 0,
	custom_fields: [],
	dependencies: [],
	linked_tasks: [],
	team_id: '5715666',
	url: 'https://app.clickup.com/t/bv58c1',
	permission_level: 'create',
	list: { id: '31029533', name: 'test', access: true },
	project: { id: '14311822', name: 'hidden', hidden: true, access: true },
	folder: { id: '14311822', name: 'hidden', hidden: true, access: true },
	space: { id: '16927407' },
	attachments: [],
};

// clickup date of task creation
const clickupdatataskcreation = {
	id: 'bv6a0q',
	custom_id: null,
	name: 'ab',
	text_content: null,
	description: null,
	status: {
		id: 'p16927407_FPSlAGk4',
		status: 'to do',
		color: '#d3d3d3',
		orderindex: 0,
		type: 'open',
	},
	orderindex: '18555.00000000000000000000000000000000',
	date_created: '1628254278930',
	date_updated: '1628254278930',
	date_closed: null,
	archived: false,
	creator: {
		id: 5983330,
		username: 'Avish Mehta',
		color: '#ff7fab',
		email: 'avish@logicwind.co',
		profilePicture:
			'https://attachments.clickup.com/profilePictures/5983330_9mg.jpg',
	},
	assignees: [],
	watchers: [
		{
			id: 5983330,
			username: 'Avish Mehta',
			color: '#ff7fab',
			initials: 'AM',
			email: 'avish@logicwind.co',
			profilePicture:
				'https://attachments.clickup.com/profilePictures/5983330_9mg.jpg',
		},
	],
	checklists: [],
	tags: [],
	parent: null,
	priority: null,
	due_date: null,
	start_date: null,
	points: null,
	time_estimate: null,
	time_spent: 0,
	custom_fields: [],
	dependencies: [],
	linked_tasks: [],
	team_id: '5715666',
	url: 'https://app.clickup.com/t/bv6a0q',
	permission_level: 'create',
	list: { id: '31029533', name: 'test', access: true },
	project: { id: '14311822', name: 'hidden', hidden: true, access: true },
	folder: { id: '14311822', name: 'hidden', hidden: true, access: true },
	space: { id: '16927407' },
	attachments: [],
};
