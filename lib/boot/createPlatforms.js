const platforms = [
	{
		key: 'gitlab',
		name: 'GitLab',
		description: 'We provide the support for GitLab',
		type: 'oauth2',
		Events:
			'Push Hooks, Tag Push Hook, Comment Hooks,Issue Hooks,Deployment Hooks, Wiki Pages Hook,Pipeline Hooks,Job Hooks,Feature Flag Hooks,Release Hooks',
		active: true,
	},
	{
		key: 'github',
		name: 'GitHub',
		description: 'We provide the support for GitHub',
		type: 'oauth2',
		Events:
			'Check Run Hooks, Check Suite Hooks, Code Scanning Alert Hooks, Commit Comment Hooks, Content Reference Hooks, Create Hooks, Delete Hooks,Deploy Key Hooks,Deployment Hooks,Deployment Status Hooks, Discussion Hooks,Discussion Comment Hooks,Fork Hooks,GitHub App Authorization Hooks,Gollum Hooks,Installation Hooks,Issue Comment Hooks,Issues Hooks,Label Hooks,Marketplace Purchase Hooks,Member Hooks,Membership,Milestone Hooks, Organization Hooks,Org Block Hooks,Package Hooks,Page Build Hooks,Ping Hooks,Project Card Hooks,Project Column Hooks,Project Hooks,Public Hooks,Pull Request Hooks,Pull Request Review Hooks,Pull Request Review Comment Hooks,Push Hooks, Release,Repository Dispatch Hooks,Repository Hooks,Repository Import Hooks,Repository Vulnerability Alert Hooks,Secret Scanning Alert Hooks,Security Advisory Hooks,Sponsorship Hooks,Star Hooks,Status Hooks,Team Hooks, Watch Hooks,Workflow Dispatch Hooks,Workflow Run Hooks',
		active: true,
	},
	{
		key: 'bitbucket',
		name: 'Bitbucket',
		description: 'We provide the support for Bitbucket',
		type: 'oauth2',
		Events:
			'Repo Push Hooks,Repo Fork Hooks,Repo Updated Hooks,Repo Transfer Hooks,Repo Commit Comment Created Hooks,Repo Commit Status Created Hooks,Repo Commit Status Updated Hooks,Issue Created Hooks, Issue Updated Hooks,Issue Comment Created Hooks,Pull Request Created Hooks,Pull Request Updated Hooks,Pull Request Changes Request Created Hooks,Pull Request Changes Request Removed Hooks, Pull Request Approved Hooks,Pull Request Unapproved Hooks,Pull Request Fulfilled Hooks,Pull Request Rejected Hooks,Pull Request Comment Created Hooks,Pull Request Comment Updated Hooks,Pull Request Comment Deleted Hooks',
		active: true,
	},
	{
		key: 'sentry',
		name: 'Sentry',
		description: 'We provide the support for Sentry',
		type: 'oauth',
		Events:
			'Installation Hooks, Uninstallation Hooks, Event ALerts Hooks, Metric Alerts Hooks,Issue Hooks,Error Hooks',
		active: true,
	},
	{
		key: 'clickUp',
		name: 'ClickUp',
		description: 'We provide the support for ClickUp',
		type: 'oauth2',
		Events:
			'Task Created Hooks, Task Updated Hooks,Task Deleted Hooks,Task Priority Updated Hooks,Task Status Updated,Task Assignee Updated Hooks, Task Due Date Updated Hooks,Task Tag Updated Hooks,Task Moved,Task Comment Posted,Task Comment Updated Hooks,Task Time Estimate Updated Hooks,Task Time Tracked Updated Hooks, List Created Hooks,List Updated Hooks,List Deleted Hooks,Folder Created Hooks, Folder Updated Hooks,Folder Deleted Hooks,Space Created Hooks,Space Updated Hooks, Space Deleted Hooks,Goal Created Hooks,Goal Updated Hooks,Goal Deleted Hooks,Key Result Created Hooks,Key Result Updated Hooks,Key Result Deleted Hooks',
		active: true,
	},
	{
		key: 'jira',
		name: 'Jira',
		description: 'We provide the support for Jira',
		type: 'oauth2',
		Events:
			'Jira Issue Created,Jira Issue Updated,Jira Issue Deleted,Issue Property Set,Issue Property Deleted,Worklog Created, Worklog Updated,Worklog Deleted,Comment Created,Comment Updated,Comment Deleted,Attachment Created,Attachment Deleted,Project Created,Project Updated, Project Deleted,Project Soft Deleted, Project Restored Deleted,Project Archived,Project Restored Archived,User Created,User Updated',
		active: true,
	},
	{
		key: 'zendesk',
		name: 'Zendesk',
		description: 'We provide the support for Zendesk',
		type: 'oauth2',
		Events: 'Ticket Solved',
		active: true,
	},
	{
		key: 'asana',
		name: 'Asana',
		description: 'We provide the support for Asana',
		type: 'oauth2',
		Events: 'assignee, custom_fields, name',
		active: true,
	},
	{
		key: 'trello',
		name: 'Trello',
		description: 'We provide the support for Trello',
		type: 'oauth',
		Events: 'updateCard, createCard, addMemberToCard',
		active: true,
	},
	{
		key: 'monday',
		name: 'monday',
		description: 'We provide the support for Monday',
		type: 'oauth2',
		Events: 'create_pulse, update_name, update_column_value',
		active: true,
	},
	{
		key: 'googleCalender',
		name: 'Google Calender',
		description: 'We provide the support for Google Calender',
		type: 'oauth2',
		Events: '',
		active: true,
	},
];

module.exports = async (models) => {
	for (let platform of platforms) {
		let platformData = await models.Platform.findOne({
			where: { key: platform.key },
		});
		if (!platformData) {
			platformData = await models.Platform.create(platform);
		}
	}
};
