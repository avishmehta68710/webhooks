const parseActors = ({ receiver, actors, actorPlatforms, key, body }) => {
	let actorsData = [];
	const commits = body.push.changes[0];
	for (let commit in commits) {
		// console.log(commit);
		let nameWithEmail = commit.author.raw.split(' ');
		const actor = {
			email: nameWithEmail.match(/<(.*)>/)[1],
			title: commit.author.type,
			profilePics: commit.author.user.links.avatar.href,
			username: nameWithEmail.slice(0, nameWithEmail.length - 1).join(' '),
		};
		actorsData.push(actor);
	}
	return actorsData;
};

module.exports = { parseActors };

// task,
