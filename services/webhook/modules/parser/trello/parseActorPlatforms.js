const fetchTrelloUser = require('../../utils/fetcher/Trello');
const parseActorPlatforms = async ({
	receiver,
	actors,
	actorPlatforms,
	key,
	body,
}) => {
	const data = await fetchTrelloUser.fetchTrelloUser();
	let actorPlatformsData = [];
	const {
		id,
		username,
		action = body.action.type,
		email = data.email,
		avatarUrl,
	} = body.action.memberCreator;
	const actorPlatform = {
		refId: body.action.memberCreator.id,
		title: actors.length !== 0 ? actors[0].title : null,
		profilePics: body.action.memberCreator.avatarUrl,
		actorId: actors.length !== 0 ? actors[0].id : null,
		actorUsername: actors.length !== 0 ? actors[0].username : null,
		platformKey: key,
		actorPlatformKey: `${body.action.memberCreator.id}_${body.action.memberCreator.username}_${key}`,
		data: {
			user_details: {
				id,
				username,
				action,
				email,
				avatarUrl,
			},
			events: { ...body.action },
		},
	};
	actorPlatformsData.push(actorPlatform);
	return actorPlatformsData;
};

module.exports = { parseActorPlatforms };
