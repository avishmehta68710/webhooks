const fetchTrelloUser = require('../../utils/fetcher/Trello');
const parseActors = async ({ receiver, actors, actorPlatforms, key, body }) => {
	let actorsData = [];
	const trelloUser = await fetchTrelloUser.fetchTrelloUser();
	const actor = {
		email: trelloUser.email,
		title: `${trelloUser.memberType} member`,
		profilePics: body.action.memberCreator.avatarUrl,
		username: body.action.memberCreator.username,
	};
	actorsData.push(actor);
	return actorsData;
};

module.exports = { parseActors };
