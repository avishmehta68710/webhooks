require('dotenv').config({ path: __dirname + '/../../../.env' });

const platformConfig = {
	Google: {
		client: {
			id: process.env.GOOGLE_CLIENT_ID,
			secret: process.env.GOOGLE_CLIENT_SECRET,
		},
		auth: {
			tokenHost: process.env.GOOGLE_AUTH_TOKEN_HOST,
			tokenPath: process.env.GOOGLE_AUTH_TOKEN_PATH,
			authorizePath: process.env.GOOGLE_AUTH_AUTHORIZE_PATH,
		},
	},
	ClickUp: {
		client: {
			id: process.env.CLICKUP_CLIENT_ID,
			secret: process.env.CLICKUP_CLIENT_SECRET,
		},
		auth: {
			tokenHost: process.env.CLICKUP_AUTH_URL_TOKEN_HOST,
			tokenPath: process.env.CLICKUP_AUTH_TOKEN_PATH,
			authorizePath: process.env.CLICKUP_AUTH_AUTHORIZE_PATH,
		},
	},
	Asana: {
		client: {
			id: process.env.ASANA_CLIENT_ID,
			secret: process.env.ASANA_CLIENT_SECRET,
		},
		auth: {
			tokenHost: process.env.ASANA_AUTH_TOKEN_HOST,
			tokenPath: process.env.ASANA_AUTH_TOKEN_PATH,
			authorizePath: process.env.ASANA_AUTH_AUTHORIZE_PATH,
		},
	},
	Monday: {
		client: {
			id: process.env.MONDAY_CLIENT_ID,
			secret: process.env.MONDAY_CLIENT_SECRET,
		},
		auth: {
			tokenHost: process.env.MONDAY_AUTH_TOKEN_HOST,
			tokenPath: process.env.MONDAY_AUTH_TOKEN_PATH,
			authorizePath: process.env.MONDAY_AUTH_AUTHORIZE_PATH,
		},
	},
	Trello: {
		client: {
			id: process.env.TRELLO_CLIENT_ID,
			secret: process.env.TRELLO_CLIENT_SECRET,
		},
		auth: {
			tokenHost: process.env.TRELLO_AUTH_TOKEN_HOST,
			tokenPath: process.env.TRELLO_AUTH_TOKEN_PATH,
			authorizePath: process.env.TRELLO_AUTH_AUTHORIZE_PATH,
		},
	},
};

const scopes = {
	Google: [
		'https://www.googleapis.com/auth/userinfo.email',
		'https://www.googleapis.com/auth/userinfo.profile',
	],
	Asana: ['asana:read', 'asana:write'],
	// ClickUp: ['https://api.clickup.com/api/v2/me'],
};

module.exports = { platformConfig, scopes };
