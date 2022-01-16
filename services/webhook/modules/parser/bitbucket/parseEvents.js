const { EVENT_TYPES } = require('../../utils/constant');
function parseEvents({ receiver, actors, actorPlatforms, key, body }) {
	let message;
	// console.log(body);
	let data;
	let eventType;
	const {
		push,
		previous_workspace,
		fork,
		commit,
		comment,
		commit_status,
		changes,
		repository,
		issue,
		pullrequest,
		changes_request,
		approval,
	} = body;
	const commits = body.push.changes[0].commits;
	let events = [];
	for (let commit of commits) {
		switch (body.event_type) {
			case 'repo:push':
				data = { push, repository };
				eventType = EVENT_TYPES.PUSH;
				message = `Commit ${body.push.changes[0].new.target.hash
					.toString()
					.slice(0, 7)} by ${body.actor.display_name} on ${body.repository.name}`;
				break;
			case 'repo:fork':
				data = { fork, repository };
				eventType = EVENT_TYPES.FORK;
				message = `Repository ${body.repository.name} has been forked by ${body.actor.display_name}`;
				break;
			case 'repo:updated':
				data = { changes, repository };
				eventType = EVENT_TYPES.UPDATE;
				message = `Repository ${body.repository.name} has been updated by ${body.actor.display_name}`;
				break;
			case 'repo:transfer':
				data = { previous_workspace, repository };
				eventType = EVENT_TYPES.TRANSFER;
				message = `Repository ${body.repository.name} has been transferred by ${body.actor.display_name} `;
				break;
			case 'repo:commit_comment_created':
				data = { commit, comment, repository };
				eventType = EVENT_TYPES.COMMIT_COMMENT;
				message = `Comment on Commit ${body.commit.hash
					.toString()
					.slice(0, 7)} has been created by ${body.actor.display_name} on ${
					body.repository.name
				}`;
				break;
			case 'repo:commit_status_created':
				data = { commit_status, repository };
				eventType = EVENT_TYPES.COMMIT;
				message = `Commit ${body.commit_status.state} by ${body.actor.display_name} on ${body.repository.name}`;
				break;
			case 'repo:commit_status_updated':
				data = { commit_status, repository };
				eventType = EVENT_TYPES.STATUS;
				message = `Commit ${body.commit_status.state} by ${body.actor.display_name} on ${body.repository.name}`;
				break;
			case 'issue:created':
				data = { issue, repository };
				eventType = EVENT_TYPES.ISSUE;
				message = `Issue has been created by ${body.actor.display_name} on ${body.repository.name}`;
				break;
			case 'issue:updated':
				data = { changes, comment, issue, repository };
				eventType = EVENT_TYPES.UPDATES;
				message = `Issue has been updated by ${body.actor.display_name} on ${body.repository.name}`;
				break;
			case 'issue:comment_created':
				data = { comment, issue, repository };
				eventType = EVENT_TYPES.COMMENT;
				message = `Comment on Issue has been created by ${body.actor.display_name} on ${body.repository.name}`;
				break;
			case 'pullrequest:created':
				data = { pullrequest, repository };
				eventType = EVENT_TYPES.PULL_REQUEST;
				message = `A Pull request has been created by ${body.actor.display_name} on ${body.repository.name}`;
				break;
			case 'pullrequest:updated':
				data = { pullrequest, repository };
				eventType = EVENT_TYPES.UPDATE;
				message = `A Pull request has been updated by ${body.actor.display_name} on ${body.repository.name}`;
				break;
			case 'pullrequest:changes_request_created':
				data = { changes_request, pullrequest, repository };
				eventType = EVENT_TYPES.CHANGES_REQUEST;
				message = `Changes have been Requested on Pull Request by ${body.actor.display_name} on ${body.repository.name}`;
				break;
			case 'pullrequest:changes_request_removed':
				data = { changes_request, repository, pullrequest };
				eventType = EVENT_TYPES.CHANGES_REQUEST;
				message = `Changes Requested on Pull request has been removed by ${body.actor.display_name} on ${body.repository.name}`;
				break;
			case 'pullrequest:approved':
				data = { approval, repository, pullrequest };
				eventType = EVENT_TYPES.PULL_REQUEST_APPROVED;
				message = `The Pull Request has been approved by ${body.actor.display_name} on ${body.repository.name}`;
				break;
			case 'pullrequest:unapproved':
				data = { approval, repository, pullrequest };
				eventType = EVENT_TYPES.PULL_REQUEST_REJECTED;
				message = `The Pull Request approval has been removed by ${body.actor.display_name} on ${body.repository.name}`;
				break;
			case 'pullrequest:fulfilled':
				data = { pullrequest, repository };
				eventType = EVENT_TYPES.PULL_REQUEST_APPROVED;
				message = `The Pull Request has been merged by ${body.actor.display_name} on ${body.repository.name}`;
				break;
			case 'pullrequest:rejected':
				data = { repository, pullrequest };
				eventType = EVENT_TYPES.PULL_REQUEST_REJECTED;
				message = `The Pull Request has been rejected by ${body.actor.display_name} on ${body.repository.name}`;
				break;
			case 'pullrequest:comment_created':
				data = { comment, repository, pullrequest };
				eventType = EVENT_TYPES.COMMENT;
				message = `Comment on Pull Request has been created by ${body.actor.display_name} on ${body.repository.name}`;
				break;
			case 'pullrequest:comment_updated':
				data = { comment, repository, pullrequest };
				eventType = EVENT_TYPES.UPDATES;
				message = `Comment on Pull Request has been updated by ${body.actor.display_name} on ${body.repository.name}`;
				break;
			case 'pullrequest:comment_deleted':
				data = { comment, repository, pullrequest };
				eventType = EVENT_TYPES.DELETE;
				message = `Comment on Pull Request has been deleted by ${body.actor.display_name} on ${body.repository.name}`;
				break;
			default:
				message = 'New event';
		}
		const event = {
			platformKey: key,
			eventType: eventType,
			data,
			receiverId: receiver.id,
			actorId: actors.length !== 0 ? actors[0].id : null,
			actorPlatformId: actorPlatforms[0].id,
			message,
		};
		events.push(event);
	}
	return events;
}
module.exports = { parseEvents };
