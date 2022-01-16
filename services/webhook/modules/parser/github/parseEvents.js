const { EVENT_TYPES } = require('../../utils/constant');
function parseEvents({ receiver, actors, actorPlatforms, KEY, body }) {
  let message;
  let data;
  let eventType;
  const { check_run, content_reference, check_suite, alert, organization, comment, key, repository, deployment, deployment_status, discussion, forkee, pages, installation, issue, changes, label, marketplace_purchase, member, team, milestone, membership, blocked_user, package, build, hook, project_card, project_column, project, pull_request, review, release, client_payload, security_advisory, sponsorship, commit, branches } = body;
  switch (body.event_type) {
    case 'check_run':
      data = { check_run, repository };
      eventType = EVENT_TYPES.CHECK_RUN;
      message = `Check Run has been ${body.action.split("_").join(" ")} by ${body.sender.login} on ${body.repository.name}`;
      break;
    case 'check_suite':
      data = { check_suite, repository };
      eventType = EVENT_TYPES.CHECK_SUITE;
      message = `Check Suite has been ${body.action} by ${body.sender.login} on ${body.repository.name}`;
      break;
    case 'code_scanning_alert':
      data = { alert, repository, organization };
      eventType = EVENT_TYPES.CODE_SCANNING_ALERT;
      message = `Code Scanning Alert has been ${body.action.split("_").join(" ")} by ${body.sender.login} on ${body.repository.name}`;
      break;
    case 'commit_comment':
      data = { comment, repository };
      eventType = EVENT_TYPES.COMMENT;
      message = `A New Comment on Commit ${body.comment.id.toString().slice(0, 7)} has been ${body.action} by ${body.sender.login} on ${body.repository.name}`;
      break;
    case 'content_reference':
      data = { content_reference, repository };
      eventType = EVENT_TYPES.CONTENT_REFERENCE;
      message = `A New Content Reference has been ${body.action} by ${body.sender.login} on ${body.repository.name}`;
      break;
    case 'create':
      data = { repository };
      eventType = EVENT_TYPES.CREATE;
      message = `A new ${body.ref_type} has been created by ${body.sender.login} on ${body.repository.name}`;
      break;
    case 'delete':
      data = { repository };
      eventType = EVENT_TYPES.DELETE;
      message = `A ${body.ref_type} has been deleted by ${body.sender.login} on ${body.repository.name}`;
      break;
    case 'deploy_key':
      data = { key, repository };
      eventType = EVENT_TYPES.DEPLOY_KEY;
      message = `A Deploy Key has been ${body.action} by ${body.sender.login} on ${body.repository.name}`;
      break;
    case 'deployment':
      data = { deployment, repository };
      eventType = EVENT_TYPES.DEPLOYMENT;
      message = `A New Deployment has been ${body.action} by ${body.sender.login} on ${body.repository.name}`;
      break;
    case 'deployment_status':
      data = { deployment_status, deployment, repository };
      eventType = EVENT_TYPES.DEPLOYMENT_STATUS;
      message = `A New Deployment has been ${body.action} by ${body.sender.login} on ${body.repository.name}`;
      break;
    case 'discussion':
      data = { discussion, repository, organization };
      eventType = EVENT_TYPES.DISCUSSION;
      message = `A Discussion has been ${body.action.split("_").join(" ")} by ${body.sender.login} on ${body.repository.name}`;
      break;
    case 'discussion_comment':
      data = { comment, discussion, repository, organization };
      eventType = EVENT_TYPES.COMMENT;
      message = `A Comment in a Discussion has been ${body.action} by ${body.sender.login} on ${body.repository.name}`;
      break;
    case 'fork':
      data = { forkee, repository };
      eventType = EVENT_TYPES.FORK;
      message = `${body.sender.login} has forked ${body.repository.name}`;
      break;
    case 'github_app_authorization':
      data = {};
      eventType = EVENT_TYPES.GITHUB_APP_AUTHORIZATION;
      message = `Github App Authorization has been ${body.action} by ${body.sender.login}`;
      break;
    case 'gollum':
      data = { pages, repository };
      eventType = EVENT_TYPES.WIKI_PAGES;
      message = `A Wiki Page has been Updated by ${body.sender.login} on ${body.repository.name}`;
      break;
    case 'installation':
      data = { installation, repository };
      eventType = EVENT_TYPES.INSTALLATION;
      message = `GitHub App has been ${body.action.split("_").join(" ")} by ${body.sender.login}`;
      break;
    case 'issue_comment':
      data = { issue, repository, comment };
      eventType = EVENT_TYPES.COMMENT;
      message = `A Comment on Issue has been ${body.action}  by ${body.sender.login} on ${body.repository.name}`;
      break;
    case 'issues':
      data = { issue, repository, changes };
      eventType = EVENT_TYPES.ISSUE;
      message = `A Issue has been ${body.action} by ${body.sender.login} on ${body.repository.name}`;
      break;
    case 'label':
      data = { label, repository, organization, installation };
      eventType = EVENT_TYPES.LABEL;
      message = `A Label has been ${body.action} by ${body.sender.login} on ${body.repository.name}`;
      break;
    case 'marketplace_purchase':
      data = { marketplace_purchase };
      eventType = EVENT_TYPES.MARKETPLACE_PURCHASE;
      message = `GitHub Marketplace Plan has been ${body.action.split("_").join(" ")}by ${body.sender.login}`;
      break;
    case 'member':
      data = { member, repository };
      eventType = EVENT_TYPES.MEMBER;
      message = `A Member has been ${body.action} by ${body.sender.login} on ${body.repository.name}`;
      break;
    case 'membership':
      data = { member, organization, team };
      eventType = EVENT_TYPES.MEMBERSHIP;
      message = `Team Membership has been ${body.action} by ${body.sender.login} on ${body.team.name}`;
      break;
    case 'milestone':
      data = { milestone, repository };
      eventType = EVENT_TYPES.MILESTONE;
      message = `A Milestone has been ${body.action} by ${body.sender.login} on ${body.repository.name} `;
      break;
    case 'organization':
      data = { membership, organization };
      eventType = EVENT_TYPES.ORGANIZATION;
      message = `Organization ${body.action.split("_").join(" ")} on ${body.organization.login} by ${body.sender.login}`;
      break;
    case 'org_block':
      data = { blocked_user, organization };
      eventType = EVENT_TYPES.ORG_BLOCK;
      message = `A Member has been ${body.action} by ${body.sender.login} on ${body.organization.login}`;
      break;
    case 'package':
      data = { package, repository };
      eventType = EVENT_TYPES.PACKAGE;
      message = `A Package has been ${body.action} by ${body.sender.login} on ${body.repository.name}`;
      break;
    case 'page_build':
      data = { build, repository };
      eventType = EVENT_TYPES.PAGE_BUILD;
      message = `GitHib Pages Site has been ${body.build.status} by ${body.sender.login} on ${body.repository.name}`;
      break;
    case 'ping':
      data = { hook, repository };
      eventType = EVENT_TYPES.PING;
      message = `A Sample Ping Event has been send on ${body.repository.name} by ${body.sender.login}`;
      break;
    case 'project_card':
      data = { project_card, repository };
      eventType = EVENT_TYPES.PROJECT_CARD;
      message = `A Project Card has been ${body.action} by ${body.sender.login} on ${body.repository.name}`;
      break;
    case 'project_column':
      data = { project_column, repository };
      eventType = EVENT_TYPES.PROJECT_COLUMN;
      message = `A Project Column has been ${body.action} by ${body.sender.login} on ${body.repository.name}`;
      break;
    case 'project':
      data = { project, repository };
      eventType = EVENT_TYPES.PROJECT;
      message = `A Project has been ${body.action} by ${body.sender.login} on ${body.repository.name}`;
      break;
    case 'public':
      data = { repository };
      eventType = EVENT_TYPES.PUBLIC;
      message = `The Repository ${body.repository.name} has been made public by ${body.sender.login}`;
      break;
    case 'pull_request':
      data = { pull_request, repository };
      eventType = EVENT_TYPES.PULL_REQUEST;
      message = `A Pull Request by ${body.sender.login} on ${body.repository.name} is ${body.action.split("_").join(" ")}`;
      break;
    case 'pull_request_review':
      data = { review, pull_request, repository };
      eventType = EVENT_TYPES.PULL_REQUEST_REVIEW;
      message = `Pull Request Review has been ${body.action} by ${body.sender.login} on ${body.repository.name}`;
      break;
    case 'pull_request_review_comment':
      data = { comment, pull_request, repository };
      eventType = EVENT_TYPES.COMMENT;
      message = `A Review Comment on Pull Request has been ${body.action}  by ${body.sender.login} on ${body.repository.name}`;
      break;
    case 'push':
      data = { repository };
      eventType = EVENT_TYPES.PUSH;
      message = `Commit ${body.after.toString().slice(0, 7)} by ${body.sender.login} on ${body.repository.name}`;
      break;
    case 'release':
      data = { release, repository };
      eventType = EVENT_TYPES.RELEASE;
      message = `A Release has been ${body.action} by ${body.sender.login} on ${body.repository.name}`;
      break;
    case 'repository_dispatch':
      data = { client_payload, repository, organization };
      eventType = EVENT_TYPES.REPOSITORY_DISPATCH;
      message = `A New Repository Dispatch has been created  by ${body.sender.login} on ${body.repository.name}`;
      break;
    case 'repository':
      data = { repository };
      eventType = EVENT_TYPES.REPOSITORY;
      message = `A Repository has been ${body.action} by ${body.sender.login} on ${body.repository.name}`;
      break;
    case 'repository_import':
      data = { repository, organization }
      eventType = EVENT_TYPES.REPOSITORY_IMPORT;
      message = `A Repository Import ${body.action} by ${body.sender.login} on ${body.repository.name}`;
      break;
    case 'repository_vulnerability_alert':
      data = { alert, repository };
      eventType = EVENT_TYPES.REPOSITORY_VULNERABILITY_ALERT;
      message = `A Security Vulnerability Alert has been ${body.action.concat('ed')} by ${body.sender.login} on ${body.repository.name}`;
      break;
    case 'secret_scanning_alert':
      data = { alert, repository, organization };
      eventType = EVENT_TYPES.SECRET_SCANNING_ALERT;
      message = `Secret Scanning Alert has been ${body.action} by ${body.sender.login} on ${body.repository.name}`;
      break;
    case 'security_advisory':
      data = { security_advisory };
      eventType = EVENT_TYPES.SECURITY_ADVISORY;
      message = `A Secret Advisory has been ${body.action} by ${body.sender.login}`;
      break;
    case 'sponsorship':
      data = { sponsorship };
      eventType = EVENT_TYPES.SPONSORSHIP;
      message = `The Sponsorship is ${body.action.split("_").join(" ")} by ${body.sender.login}`;
      break;
    case 'star':
      data = { repository };
      eventType = EVENT_TYPES.STAR;
      message = `A Star has been ${body.action} by ${body.sender.login} on ${body.repository.name}`;
      break;
    case 'status':
      data = { commit, branches, repository };
      eventType = EVENT_TYPES.STATUS;
      message = `Commit ${body.id.toString().slice(0, 7)} ${body.state} by ${body.sender.login} on ${body.repository.name}`;
      break;
    case 'team':
      data = { team, organization, repository };
      eventType = EVENT_TYPES.TEAM;
      message = `A Team has been ${body.action.split("_").join(" ")} by ${body.sender.login} on ${body.repository.name}`;
      break;
    case 'watch':
      data = { repository };
      eventType = EVENT_TYPES.STAR;
      message = `${body.repository.name} has been stared by ${body.sender.login}`;
      break;
    case 'workflow_dispatch':
      data = { repository, organization };
      eventType = EVENT_TYPES.WORKFLOW_DISPATCH;
      message = `A Workflow Run has been created by ${body.sender.login} on ${body.repository.name}`;
      break;
    case 'workflow_run':
      data = { organization, repository };
      eventType = EVENT_TYPES.WORKFLOW_RUN;
      message = `The Workflow Run has been ${body.action.split("_").join(" ")} by ${body.sender.login} on ${body.repository.name}`;
      break;
    default:
      message = 'New event';
  }
  const events = [];
  const event = {
    platformKey: 'github',
    eventType: body.event_type,
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
