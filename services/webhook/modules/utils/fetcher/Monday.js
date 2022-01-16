const axios = require('axios');
require('dotenv').config({ path: __dirname + '/../../../../../.env' });

async function getUser(userId) {
	var data = JSON.stringify({
		query: `query {
    users (ids: [${userId}]) {
        email
		id
		photo_original
		name
        account {
            name
            id
        }
        title
    }
}`,
		variables: {},
	});

	const accessToken = process.env.MONDAY_ACCESS_TOKEN;
	var config = {
		method: 'post',
		url: 'https://api.monday.com/v2',
		headers: {
			Authorization: `${accessToken}`,
			'Content-Type': 'application/json',
		},
		data: data,
	};
	const response = await axios(config);
	return response.data;
}

module.exports = { getUser };
