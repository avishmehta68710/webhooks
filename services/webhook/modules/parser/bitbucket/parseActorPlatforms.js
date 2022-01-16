const parseActorPlatforms = ({
	receiver,
	actors,
	actorPlatforms,
	key,
	body,
}) => {
	let actorPlatformsData = [];
	const commits = body.push.changes[0];
	for (let commit in commits) {
		console.log(commit);
		let nameWithEmail = commit.author.raw.split(' ');
		const committer = {
			account_id: commit.author.user.uuid,
			display_name: nameWithEmail.slice(0, nameWithEmail.length - 1).join(' '),
			event_name: commit.type,
			user_email: nameWithEmail.match(/<(.*)>/)[1],
			user_avatar: commit.author.user.links.avatar.href,
		};
		const actorPlatform = {
			refId: commit.hash,
			title: commit.type,
			profilePics: commit.author.user.links.avatar.href,
			actorId: actors.length !== 0 ? actors[0].id : null,
			actorUsername: committer.display_name,
			platformKey: key,
			// actorPlatformKey: `${body.actor.display_name}_${body.actor.account_id}_${key}`,
			data: {
				user_details: committer,
			},
		};
		actorPlatform.repository = { ...body.repository };
		actorPlatformsData.push(actorPlatform);
	}
	return actorPlatformsData;
};

module.exports = { parseActorPlatforms };
