const { authorize } = require('../../utils/fetcher/clickUp');

const parseActors = async ({ receiver, actors, actorPlatforms, key, body }) => {
	let actorsData = [];
	let data;
	if (body.event !== 'taskDeleted') {
		data = await authorize(body);
	}
	const actor = {
		email:
			body.history_items.length !== 0
				? body.history_items[0].user.email
				: data !== undefined
				? data.creator.email
				: null,
		title: null,
		profilePics:
			body.history_items.length !== 0
				? body.history_items[0].user.profilePicture
				: data !== undefined
				? data.creator.profilePicture
				: null,
		username:
			body.history_items.length !== 0
				? body.history_items[0].user.username
				: data !== undefined
				? data.creator.username
				: null,
	};
	actorsData.push(actor);
	return actorsData;
};

module.exports = { parseActors };

// clickup data from token
// const d = {
//   id: 'bv5k8n',
//   custom_id: null,
//   name: 'dwwd',
//   text_content: null,
//   description: null,
//   status: {
//     id: 'p16927407_FPSlAGk4',
//     status: 'to do',
//     color: '#d3d3d3',
//     orderindex: 0,
//     type: 'open'
//   },
//   orderindex: '18540.00000000000000000000000000000000',
//   date_created: '1628242052870',
//   date_updated: '1628242052870',
//   date_closed: null,
//   archived: false,
//   creator: {
//     id: 5983330,
//     username: 'Avish Mehta',
//     color: '#ff7fab',
//     email: 'avish@logicwind.co',
//     profilePicture: 'https://attachments.clickup.com/profilePictures/5983330_9mg.jpg'
//   },
//   assignees: [],
//   watchers: [
//     {
//       id: 5983330,
//       username: 'Avish Mehta',
//       color: '#ff7fab',
//       initials: 'AM',
//       email: 'avish@logicwind.co',
//       profilePicture: 'https://attachments.clickup.com/profilePictures/5983330_9mg.jpg'
//     }
//   ],
//   checklists: [],
//   tags: [],
//   parent: null,
//   priority: null,
//   due_date: null,
//   start_date: null,
//   points: null,
//   time_estimate: null,
//   time_spent: 0,
//   custom_fields: [],
//   dependencies: [],
//   linked_tasks: [],
//   team_id: '5715666',
//   url: 'https://app.clickup.com/t/bv5k8n',
//   permission_level: 'create',
//   list: { id: '31029533', name: 'test', access: true },
//   project: { id: '14311822', name: 'hidden', hidden: true, access: true },
//   folder: { id: '14311822', name: 'hidden', hidden: true, access: true },
//   space: { id: '16927407' },
//   attachments: []
// }
