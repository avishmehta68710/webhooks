const parseActorPlatforms = ({
	receiver,
	actors,
	actorPlatforms,
	key,
	body,
}) => {
	let actorPlatformsData = [];
	const {
		user_id = body.user.id,
		user_name = body.user.name,
		event_name = body.object_kind,
		user_email = body.user.email,
		user_avatar = body.user.avatar_url,
		user_username = body.user.username,
	} = body;
	const actorPlatform = {
		refId: body.user_id || body.user.id,
		title: actors.length !== 0 ? actors[0].title : null,
		profilePics: body.user_avatar || body.user.avatar_url,
		actorId: actors.length !== 0 ? actors[0].id : null,
		actorUsername: actors.length !== 0 ? actors[0].username : null,
		platformKey: key,
		// actorPlatformKey: body.user !== undefined ? `${body.user.username}_${key}` : body.object_kind !== 'release' ? `${body.user_username}_${key}` : `${body.commit.author.name}_${key}`,  // in release events, the user doesnt exist
		data: {
			user_details: {
				user_id,
				user_name,
				event_name,
				user_email,
				user_avatar,
				user_username,
			},
			repository: { ...body.repository },
		},
	};
	actorPlatformsData.push(actorPlatform);
	return actorPlatformsData;
};

module.exports = { parseActorPlatforms };
