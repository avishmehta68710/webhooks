const axios = require('axios');
require('dotenv').config({ path: __dirname + '/../../../../../.env' });

const accessToken = process.env.ASANA_ACCESS_TOKEN;
async function getUser(userId) {
	const url = `https://app.asana.com/api/1.0/users/${userId}`;
	const response = await axios.get(url, {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	});
	const user = response.data;
	return user.data;
}

async function getTask(taskId) {
	const url = `https://app.asana.com/api/1.0/tasks/${taskId}`;
	const response = await axios.get(url, {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	});
	const task = response.data;
	return task.data;
}

async function getCustomFields(customFieldId, enumId) {
	const url = `https://app.asana.com/api/1.0/custom_fields/${customFieldId}`;
	const response = await axios.get(url, {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	});
	const customField = response.data;
	for (let i = 0; i < customField.data.enum_options.length; i++) {
		if (customField.data.enum_options[i].gid == enumId) {
			return `${customField.data.name} : ${customField.data.enum_options[i].name}`;
		}
	}
	// console.log(customField);
	return customField.data;
}

async function getProject(projectId) {
	const url = `https://app.asana.com/api/1.0/projects/${projectId}`;
	const response = await axios.get(url, {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	});
	const project = response.data;
	return project.data;
}

module.exports = {
	getUser,
	getTask,
	getCustomFields,
	getProject,
};
// priority
// {
//   user: { gid: '1200703502488084', resource_type: 'user' },
//   created_at: '2021-08-19T06:02:37.809Z',
//   action: 'changed',
//   parent: null,
//   resource: {
//     gid: '1200807241966797',
//     resource_type: 'task',
//     resource_subtype: 'default_task'
//   },
//   change: {
//     field: 'custom_fields',
//     action: 'changed',
//     new_value: {
//       gid: '1200703500262092',
//       resource_type: 'custom_field',
//       resource_subtype: 'enum',
//       enum_value: [Object]
//     }
//   }
// } {
//   field: 'custom_fields',
//   action: 'changed',
//   new_value: {
//     gid: '1200703500262092',
//     resource_type: 'custom_field',
//     resource_subtype: 'enum',
//     enum_value: { gid: '1200703500262094', resource_type: 'enum_option' }
//   }
// }

// status
// {
//   user: { gid: '1200703502488084', resource_type: 'user' },
//   created_at: '2021-08-19T06:05:43.845Z',
//   action: 'changed',
//   parent: null,
//   resource: {
//     gid: '1200807241966797',
//     resource_type: 'task',
//     resource_subtype: 'default_task'
//   },
//   change: {
//     field: 'custom_fields',
//     action: 'changed',
//     new_value: {
//       gid: '1200703500262097',
//       resource_type: 'custom_field',
//       resource_subtype: 'enum',
//       enum_value: [Object]
//     }
//   }
// } {
//   field: 'custom_fields',
//   action: 'changed',
//   new_value: {
//     gid: '1200703500262097',
//     resource_type: 'custom_field',
//     resource_subtype: 'enum',
//     enum_value: { gid: '1200703500262099', resource_type: 'enum_option' }
//   }
// }
