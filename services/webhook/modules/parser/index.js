const clickUp = require('./clickup');
const gitlab = require('./gitlab');
const github = require('./github');
const bitbucket = require('./bitbucket');
const sentry = require('./sentry');
const jira = require('./jira');
const zendesk = require('./zendesk');
const asana = require('./asana');
const trello = require('./trello');
const monday = require('./monday');

const platforms = {
	clickUp,
	gitlab,
	github,
	bitbucket,
	sentry,
	jira,
	zendesk,
	asana,
	trello,
	monday,
};

function getParser(platform) {
	if (!platforms[platform]) {
		throw new Error(`${platform} support not available!`);
	}
	console.log('platform is', platform);
	return platforms[platform];
}

module.exports = {
	platforms,
	getParser,
};
