const axios = require('axios');
const fetchData = require('../../utils/fetcher/Monday');

const parseActors = async ({ receiver, actors, actorPlatforms, key, body }) => {
	let data = await fetchData.getUser(body.event.userId);
	let actorsData = [];
	const actor = {
		email: data.data.users[0].email,
		title: data.data.users[0].title,
		profilePics: data.data.users[0].photo_original,
		username: data.data.users[0].name,
	};
	actorsData.push(actor);
	return actorsData;
};

module.exports = { parseActors };
