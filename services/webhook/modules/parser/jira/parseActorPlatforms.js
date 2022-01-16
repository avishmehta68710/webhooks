const bodyParser = require('body-parser');

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

const parseActorPlatforms = ({
	receiver,
	actors,
	actorPlatforms,
	key,
	body,
}) => {
	let details = {};
	let otherDetails = {};
	const category = getCategory(body.webhookEvent);
	switch (category) {
		case 'comment':
			details = {
				id: body.comment.author.accountId,
				email: body.comment.author.emailAddress,
				title: body.comment.author.accountType,
				profilePics: body.comment.author.avatarUrls['48x48'],
				username: body.comment.author.displayName,
			};
			otherDetails = {
				comment: body.comment,
				issue: body.issue,
			};
			break;
		case 'project':
			details = {
				id: body.project.projectLead.accountId,
				email: body.project.projectLead.emailAddress,
				title: body.project.projectLead.accountType,
				profilePics: body.project.projectLead.avatarUrls['48x48'],
				username: body.project.projectLead.displayName,
			};
			otherDetails = {
				project: body.project,
			};
			break;
		case 'issue':
			details = {
				id: body.user.accountId,
				email: body.user.emailAddress,
				title: body.user.accountType,
				profilePics: body.user.avatarUrls['48x48'],
				username: body.user.displayName,
			};
			otherDetails = {
				issue: body.issue,
				changelog: body.changelog !== undefined ? body.changelog : null,
			};
			break;
		case 'user':
			details = {
				id: body.user.accountId,
				email: body.user.emailAddress,
				title: body.user.accountType,
				profilePics: body.user.avatarUrls['48x48'],
				username: body.user.displayName,
			};
			otherDetails = {
				user: body.user,
			};
			break;
		case 'attachment':
			details = {
				id: body.attachment.accountId,
				email: body.attachment.author.emailAddress,
				title: body.attachment.author.accountType,
				profilePics: body.attachment.author.avatarUrls,
				username: body.attachment.author.displayName,
			};
			otherDetails = {
				attachment: body.attachment,
			};
			break;
		case 'worklog':
			details = {
				id: body.worklog.accountId,
				email: body.worklog.author.emailAddress,
				title: body.worklog.author.accountType,
				profilePics: body.worklog.author.avatarUrls['48x48'],
				username: body.worklog.author.displayName,
			};
			otherDetails = {
				worklog: body.worklog,
			};
			break;
		default:
			details = {
				id: null,
				email: null,
				title: null,
				profilePics: null,
				username: null,
			};
	}
	let actorPlatformsData = [];
	const data = {
		user_id: details.id,
		user_name: details.username,
		event_name: body.webhookEvent,
		user_email: details.email,
		user_avatar: details.profilePics,
		user_username: details.username,
	};
	const actorPlatform = {
		refId: details.id !== null ? details.id : null,
		title: actors.length !== 0 ? actors[0].title : null,
		profilePics: details.profilePics !== null ? details.profilePics : null,
		actorId: actors.length !== 0 ? actors[0].id : null,
		actorUsername: actors.length !== 0 ? actors[0].username : null,
		platformKey: key,
		actorPlatformKey:
			details.id !== null ? `${details.username}_${details.id}_${key}` : null,
		data: {
			user_details: data,
			other_details: otherDetails,
		},
	};
	actorPlatformsData.push(actorPlatform);
	return actorPlatformsData;
};

module.exports = { parseActorPlatforms };
