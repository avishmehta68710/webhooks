const fetchData = require('../../utils/fetcher/Asana');

const parseActors = async ({ receiver, actors, actorPlatforms, key, body }) => {
	let data = await fetchData.getUser(body.events[0].user.gid);
	let actorsData = [];
	const actor = {
		email: data.data.email,
		title: body.events[0].user.resource_type,
		profilePics: data.data.photo,
		username: data.data.name,
	};
	actorsData.push(actor);
	return actorsData;
};

module.exports = { parseActors };
