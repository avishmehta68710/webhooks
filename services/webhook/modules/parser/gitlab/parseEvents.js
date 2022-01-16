const { EVENT_TYPES } = require('../../utils/constant');
function parseEvents({ receiver, actors, actorPlatforms, key, body }) {
  let message;
  let data;
  let eventType;
  const { project, commits, object_attributes, labels, commit, wiki, merge_request, builds, repository, runner } = body;
  switch (body.event_type) {
    case 'Push Hook':
      data = { project, commits };
      eventType = EVENT_TYPES.PUSH;
      message = `Commit ${body.after.slice(0, 7)} by ${body.user_name} on ${body.repository.name}`;
      break;
    case 'Tag Push Hook':
      data = { project, commits };
      eventType = EVENT_TYPES.TAG_PUSH;
      message = `Tag Committed by ${body.user_name} on ${body.repository.name}`;
      break;
    case 'Issue Hook':
      data = { project, object_attributes };
      eventType = EVENT_TYPES.ISSUE;
      message = `A Issue has been ${body.object_attributes.state} by ${body.user.name} on ${body.repository.name}`;
      break;
    case 'Note Hook':
      data = { project, object_attributes, commit };
      eventType = EVENT_TYPES.COMMENT;
      message = `A Comment has been Created by ${body.user.name} on ${body.repository.name}`;
      break;
    case 'Merge Request Hook':
      data = { project, object_attributes, labels };
      eventType = EVENT_TYPES.MERGE_REQUEST;
      message = `The Merge Request has been ${body.object_attributes.state} by ${body.user.name} on ${body.repository.name}`;
      break;
    case 'Wiki Page Hook':
      data = { project, object_attributes, wiki };
      eventType = EVENT_TYPES.WIKI_PAGES;
      message = `The Wiki Pages has been ${body.object_attributes.action.concat('ed')} by ${body.user.name} on ${body.project.name}`;
      break;
    case 'Pipeline Hook':
      data = { object_attributes, merge_request, project, commit, builds };
      eventType = EVENT_TYPES.PIPELINE;
      message = `Pipeline ${body.object_attributes.status} by ${body.user.name} on ${body.project.name}`;
      break;
    case 'Job Hook':
      data = { commit, repository, runner };
      eventType = EVENT_TYPES.JOB;
      message = `Job has been ${body.build_status} by ${body.user.name} on ${body.repository.name}`;
      break;
    case 'Deployment Hook':
      data = { project };
      eventType = EVENT_TYPES.DEPLOYMENT;
      message = `Deployment ${body.status} by ${body.user.name} on ${body.project.name}`;
      break;
    case 'Feature Flag Hook':
      data = { project, object_attributes };
      eventType = EVENT_TYPES.FEATURE_FLAG;
      message = `Feature Flag has been turned ${body.object_attributes.active === true ? 'On' : 'Off'} by ${body.user.name} on ${body.project.name}`; // active will return true or false
      break;
    case 'Release Hook':
      data = { project, commit };
      eventType = EVENT_TYPES.RELEASE;
      message = `Release has been ${body.action.concat('ed')} on ${body.project.name}`;  // action will give update or create
      break;
    default:
      message = 'New event';
  }
  const events = [];
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
  return events;
}
module.exports = { parseEvents };