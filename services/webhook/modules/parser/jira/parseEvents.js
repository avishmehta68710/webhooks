const { EVENT_TYPES, EVENT_MODULES } = require('../../utils/constant');
function parseEvents({ receiver, actors, actorPlatforms, key, body }) {
  let message;
  let data;
  let eventType;
  // const { comment, issue, project, user, accountId, username, issueLink, property, sprint, configuration, changelog, worklog } = body;
  const { comment, issue, project, user, changelog, worklog } = body;
  switch (body.event_type) {
    case 'comment_created':
      data = { comment, issue };
      eventType = EVENT_TYPES.CREATE;
      message = `Comment created by ${body.comment.author.displayName} on ${body.issue.project.name}`;
      break;
    case 'comment_updated':
      data = { comment, issue };
      eventType = EVENT_TYPES.UPDATES;
      message = `Comment Updated by ${body.comment.author.displayName} on ${body.issue.project.name}`;
      break;
    case 'comment_deleted':
      data = { comment, issue };
      eventType = EVENT_TYPES.DELETE;
      message = `Comment has been Deleted by ${body.comment.author.displayName} on ${body.issue.project.name}`;
      break;
    case 'project_created':
      data = { project };
      eventType = EVENT_TYPES.CREATE;
      message = `A Project named${body.project.name} has been Created by ${body.project.projectLead.displayName} `;
      break;
    case 'project_soft_deleted':
      data = { project };
      eventType = EVENT_TYPES.DELETE;
      message = `The Project named ${body.project.name} has been moved to Trash `;
      break;
    case 'project_updated':
      data = { project };
      eventType = EVENT_TYPES.UPDATES;
      message = `The Project named ${body.project.name} has been Updated by ${body.project.projectLead.displayName}`;
      break;
    case 'project_restored_deleted':
      data = { project };
      eventType = EVENT_TYPES.DELETE;
      message = `The Project named ${body.project.name} has been restored from Trash by ${body.project.projectLead.displayName}`;
      break;
    case 'project_deleted':
      data = { project };
      eventType = EVENT_TYPES.DELETE;
      message = `The Project named ${body.project.name} has been Deleted by ${body.project.projectLeader.displayName}`;
      break;
    case 'project_archived':
      data = { project };
      eventType = EVENT_TYPES.ARCHIVE;
      message = `The Project named ${body.project.name} has been by archived by ${body.project.projectLeader.displayName}`;
      break;
    case 'project_restored_archived':
      data = { project };
      eventType = EVENT_TYPES.ARCHIVE;
      message = `The Project named ${body.project.name} has been restored from archived by ${body.project.projectLeader.displayName}`;
      break;
    case 'user_created':
      data = { user };
      eventType = EVENT_TYPES.CREATE;
      message = `A New User named ${body.user.displayName} has been added`;
      break;
    case 'user_updated':
      data = { user };
      eventType = EVENT_TYPES.UPDATES;
      message = `A User named ${body.user.displayName} has been updated`;
      break;
    // case 'user_deleted':
    //   data = { accountId, username };
    //   eventType = EVENT_TYPES.RELEASE;
    //   message = `A User has been deleted`;
    //   break;
    case 'attachment_created':
      data = { attachment };
      eventType = EVENT_TYPES.CREATE;
      message = `A New Attachment has been created by${body.author.displayName}`;
      break;
    case 'attachment_deleted':
      data = { attachment };
      eventType = EVENT_TYPES.DELETE;
      message = `An Attachment has been deleted by${body.author.displayName}`;
      break;
    // case 'issuelink_created':
    //   data = { issueLink };
    //   eventType = EVENT_TYPES.ISSUE;
    //   message = `A New issue link has been created `;
    //   break;
    // case 'issuelink_deleted':
    //   data = { issueLink };
    //   eventType = EVENT_TYPES.ISSUE;
    //   message = `An issue link has been deleted `;
    //   break;
    // case 'option_voting_changed':
    //   data = { property };
    //   eventType = EVENT_TYPES.ISSUE;
    //   message = `The voting option has been changed`;
    //   break;
    // case 'option_watching_changed':
    //   data = { property };
    //   eventType = EVENT_TYPES.ISSUE;
    //   message = `The watching option has been changed`;
    //   break;
    // case 'option_attachments_changed':
    //   data = { property };
    //   eventType = EVENT_TYPES.ISSUE;
    //   message = `The attachments option has been changed`;
    //   break;
    // case 'option_subtasks_changed':
    //   data = { property };
    //   eventType = EVENT_TYPES.ISSUE;
    //   message = `The subtasks option has been changed`;
    //   break;
    // case 'option_unassigned_issues_changed':
    //   data = { property };
    //   eventType = EVENT_TYPES.ISSUE;
    //   message = `The unassigned issues option has been changed`;
    //   break;
    // case 'option_issuelinks_changed':
    //   data = { property };
    //   eventType = EVENT_TYPES.ISSUE;
    //   message = `The issue links option has been changed`;
    //   break;
    // case 'option_timetracking_changed':
    //   data = { property };
    //   eventType = EVENT_TYPES.ISSUE;
    //   message = `The time tracking option has been changed`;
    //   break;
    // case 'sprint_created':
    //   data = { sprint };
    //   eventType = EVENT_TYPES.ISSUE;
    //   message = `A New Sprint has been created`;
    //   break;
    // case 'sprint_updated':
    //   data = { sprint };
    //   eventType = EVENT_TYPES.ISSUE;
    //   message = `The Sprint has been updated`;
    //   break;
    // case 'sprint_deleted':
    //   data = { sprint };
    //   eventType = EVENT_TYPES.ISSUE;
    //   message = `The Sprint has been deleted`;
    //   break;
    // case 'sprint_started':
    //   data = { sprint };
    //   eventType = EVENT_TYPES.ISSUE;
    //   message = `The Sprint has been started`;
    //   break;
    // case 'sprint_closed':
    //   data = { sprint };
    //   eventType = EVENT_TYPES.ISSUE;
    //   message = `The Sprint has been closed`;
    //   break;
    // case 'board_configuration_changed':
    //   data = { configuration };
    //   eventType = EVENT_TYPES.ISSUE;
    //   message = `The board configuration has been changed `;
    //   break;
    // case 'board_created':
    //   data = { board };
    //   eventType = EVENT_TYPES.ISSUE;
    //   message = `A New Board has been created`;
    //   break;
    // case 'board_updated':
    //   data = { board };
    //   eventType = EVENT_TYPES.ISSUE;
    //   message = `The Board has been updated`;
    //   break;
    // case 'board_deleted':
    //   data = { board };
    //   eventType = EVENT_TYPES.ISSUE;
    //   message = `The Board has been deleted`;
    //   break;
    case 'jira:issue_updated':
      data = { user, issue, changelog };
      eventType = EVENT_TYPES.UPDATES;
      message = `The issue has been updated by ${body.user.displayName}`;
      break;
    case 'jira:issue_created':
      data = { user, issue, changelog };
      eventType = EVENT_TYPES.CREATE;
      message = `The issue has been created by ${body.user.displayName}`;
      break;
    // case 'jira:issue_deleted':
    //   data = { user, issue, changelog };
    //   eventType = EVENT_TYPES.DELETE;
    //   message = `The issue has been deleted by ${body.user.displayName}`;
    //   break;
    // case 'jira:version_updated':
    //   data = { version };
    //   eventType = EVENT_TYPES.ISSUE;
    //   message = `The version ${body.version.name} has been updated`;
    //   break;
    // case 'jira:version_released':
    //   data = { version };
    //   eventType = EVENT_TYPES.ISSUE;
    //   message = `The version ${body.version.name} has been released`;
    //   break;
    // case 'jira:version_unreleased':
    //   data = { version };
    //   eventType = EVENT_TYPES.ISSUE;
    //   message = `The version ${body.version.name} has been unreleased`;
    //   break;
    // case 'jira:version_created':
    //   data = { version };
    //   eventType = EVENT_TYPES.ISSUE;
    //   message = `The version ${body.version.name} has been created`;
    //   break;
    // case 'jira:version_deleted':
    //   data = { version };
    //   eventType = EVENT_TYPES.ISSUE;
    //   message = `The version ${body.version.name} has been deleted`;
    //   break;
    // case 'jira:version_moved':
    //   data = { version };
    //   eventType = EVENT_TYPES.ISSUE;
    //   message = `The version ${body.version.name} has been moved`;
    //   break;
    case 'worklog_created':
      data = { worklog };
      eventType = EVENT_TYPES.CREATE;
      message = `A new worklog has been created by ${body.author.displayName}`;
      break;
    case 'worklog_deleted':
      data = { worklog };
      eventType = EVENT_TYPES.DELETE;
      message = `A worklog has been deleted by ${body.author.displayName}`;
      break;
    case 'worklog_updated':
      data = { worklog };
      eventType = EVENT_TYPES.DELETE;
      message = `A worklog has been updated by ${body.author.displayName}`;
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
    modules: EVENT_MODULES.TASK,
    message,
  };

  events.push(event);
  return events;
}
module.exports = { parseEvents };