const { authorize } = require('../../utils/fetcher/clickUp');

const parseActorPlatforms = async ({
	receiver,
	actors,
	actorPlatforms,
	key,
	body,
}) => {
	let actorPlatformsData = [];
	const data = await authorize(body);
	const {
		id = data.creator.id,
		event_name = body.event,
		email = data.creator.email,
		profilePicture = data.creator.profilePicture,
		username = data.creator.username,
	} = body.history_items;
	const actorPlatform = {
		refId: body.history_items.length !== 0 ? body.history_items[0].id : null,
		title: actors.length !== 0 ? actors[0].title : null,
		profilePic:
			body.history_items !== undefined
				? body.history_items[0].user.profilePicture
				: data.creator.profilePicture,
		actorId: actors.length !== 0 ? actors[0].id : null,
		actorUsername: actors.length !== 0 ? actors[0].username : null,
		platformKey: key,
		actorPlatformKey:
			body.history_items.length !== 0
				? `${body.history_items[0].user.username}_${body.history_items[0].user.id}_${key}`
				: `${data.creator.username}_${data.creator.id}_${key}`,
		data: {
			user_details: {
				id,
				event_name,
				email,
				profilePicture,
				username,
			},
			history: { ...body.history_items[0] },
		},
	};
	actorPlatformsData.push(actorPlatform);
	return await actorPlatformsData;
};

module.exports = { parseActorPlatforms };
