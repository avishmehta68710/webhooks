function getCategory(event) {
	if (event.includes('comment')) {
		return 'comment';
	} else if (event.includes('project')) {
		return 'project';
	} else if (event.includes('jira:issue')) {
		return 'issue';
	} else if (event.includes('user')) {
		return 'user';
	} else if (event.includes('attachment')) {
		return 'attachment';
	} else if (event.includes('worklog')) {
		return 'worklog';
	}
}

const parseActors = ({ receiver, actors, actorPlatforms, key, body }) => {
	let actorsData = [];
	let actor = {};
	const category = getCategory(body.webhookEvent);
	switch (category) {
		case 'comment':
			actor = {
				email: body.comment.author.emailAddress,
				title: body.comment.author.accountType,
				profilePics: body.comment.author.avatarUrls['48x48'],
				username: body.comment.author.displayName,
			};
			break;
		case 'project':
			actor = {
				email: body.project.projectLead.emailAddress,
				title: body.project.projectLead.accountType,
				profilePics: body.project.projectLead.avatarUrls['48x48'],
				username: body.project.projectLead.displayName,
			};
			break;
		case 'issue':
			actor = {
				email: body.user.emailAddress,
				title: body.user.accountType,
				profilePics: body.user.avatarUrls['48x48'],
				username: body.user.displayName,
			};
			break;
		case 'user':
			actor = {
				email: body.user.emailAddress,
				title: body.user.accountType,
				profilePics: body.user.avatarUrls['48x48'],
				username: body.user.displayName,
			};
			break;
		case 'attachment':
			actor = {
				email: body.attachment.author.emailAddress,
				title: body.attachment.author.accountType,
				profilePics: body.attachment.author.avatarUrls,
				username: body.attachment.author.displayName,
			};
			break;
		case 'worklog':
			actor = {
				email: body.worklog.author.emailAddress,
				title: body.worklog.author.accountType,
				profilePics: body.worklog.author.avatarUrls['48x48'],
				username: body.worklog.author.displayName,
			};
			break;
		default:
			actor = {
				email: null,
				title: null,
				profilePics: null,
				username: null,
			};
	}
	actorsData.push(actor);
	return actorsData;
};

module.exports = { parseActors };
