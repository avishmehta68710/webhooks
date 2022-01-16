const fetchData = require('../../utils/fetcher/Monday');
const parseActorPlatforms = async ({
	receiver,
	actors,
	actorPlatforms,
	key,
	body,
}) => {
	let data = await fetchData.getUser(body.event.userId);
	let actorPlatformsData = [];
	const {
		userId,
		username = data.data.users[0].name,
		type,
		user_email = data.data.users[0].email,
		user_avatar = data.data.users[0].photo_original,
	} = body.event;
	const actorPlatform = {
		refId: body.event.triggerUuid,
		title: actors.length !== 0 ? actors[0].title : null,
		profilePics: data.data.users[0].photo_original,
		actorId: actors.length !== 0 ? actors[0].id : null,
		actorUsername: actors.length !== 0 ? actors[0].username : null,
		platformKey: key,
		actorPlatformKey: `${data.data.users[0].name}_${data.data.users[0].id}_${key}`,
		data: {
			user_details: {
				userId,
				username,
				type,
				user_email,
				user_avatar,
			},
			event: { ...body.event },
		},
	};
	actorPlatformsData.push(actorPlatform);
	return actorPlatformsData;
};

module.exports = { parseActorPlatforms };
