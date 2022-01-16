const fetchData = require('../../utils/fetcher/Asana');
const parseActorPlatforms = async ({
	receiver,
	actors,
	actorPlatforms,
	key,
	body,
}) => {
	let data = await fetchData.getUser(body.events[0].user.gid);
	let actorPlatformsData = [];
	const {
		gid = body.events[0].user.gid,
		username = data.data.name,
		action,
		user_email = data.data.email,
		user_avatar = data.data.photo,
	} = body.events[0];
	const actorPlatform = {
		refId: body.events[0].user.gid,
		title: actors.length !== 0 ? actors[0].title : null,
		profilePics: data.photo,
		actorId: actors.length !== 0 ? actors[0].id : null,
		actorUsername: actors.length !== 0 ? actors[0].username : null,
		platformKey: key,
		actorPlatformKey: `${body.events[0].user.gid}_${data.name}_${key}`,
		data: {
			user_details: {
				gid,
				username,
				action,
				user_email,
				user_avatar,
			},
			events: { ...body.events },
		},
	};
	actorPlatformsData.push(actorPlatform);
	return actorPlatformsData;
};

module.exports = { parseActorPlatforms };
