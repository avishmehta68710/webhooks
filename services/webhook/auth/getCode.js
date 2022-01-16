require('dotenv').config({ path: __dirname + '/../../../.env' });
const {
	ClientCredentials,
	ResourceOwnerPassword,
	AuthorizationCode,
} = require('simple-oauth2');
const { platformConfig, scopes } = require('./config');

async function getCode(req, res, platform) {
	console.log(platformConfig, platform, platformConfig[platform]);
	if (platformConfig[platform] === undefined) {
		res.status(400).send('Platform support not available');
	}
	const config = platformConfig[platform];
	console.log('config is', config);
	const client = new AuthorizationCode(config);
	console.log('client is', client);
	const scope = scopes[platform];
	let authorizationUri = client.authorizeURL({
		redirect_uri: process.env.REDIRECT_URI,
		response_type: 'code',
		// scope: scope,
		// state: '3(#0/!~',
	});
	// authorizationUri = authorizationUri.replace('response_type=code&', '');
	// authorizationUri = authorizationUri + '&response_type=code';
	console.log(authorizationUri);
	res.redirect(authorizationUri);
}

async function getAccessToken(req, res, platform) {
	if (platformConfig[platform] === undefined) {
		res.status(400).send('Platform support not available');
	}
	// console.log('welcome');
	const config = await platformConfig[platform];
	console.log('config part1', config);
	switch (platform) {
		case 'Asana': {
			config.auth.tokenHost = 'https://app.asana.com/-/oauth_token';
			config.auth.tokenPath = process.env.ASANA_AUTH_TOKEN_PATH;
			console.log('config part2', config);
			const client = await new AuthorizationCode(config);
			console.log(process.env.REDIRECT_URI);
			const tokenParams = {
				grant_type: 'authorization_code',
				client_id: process.env.ASANA_CLIENT_ID,
				client_secret: process.env.ASANA_CLIENT_SECRET,
				code: req.query.code,
				redirect_uri: process.env.REDIRECT_URI,
			};
			console.log('tokenParams', tokenParams);
			try {
				const token = await client.getToken(tokenParams, { json: true });
				console.log(JSON.stringify(token));
				return token;
			} catch (err) {
				console.log(err);
			}
			break;
		}
		case 'ClickUp': {
			config.auth.tokenHost = process.env.CLICKUP_ACESS_TOKEN_HOST;
			config.auth.tokenPath = process.env.CLICKUP_TOKEN_PATH;
			console.log('config part2', config);
			const client = await new AuthorizationCode(config);
			console.log(process.env.REDIRECT_URI);
			const tokenParams = {
				client_id: process.env.MONDAY_CLIENT_ID,
				client_secret: process.env.MONDAY_CLIENT_SECRET,
				code: req.query.code,
				redirect_uri: process.env.REDIRECT_URI,
				grant_type: 'authorization_code',
			};
			try {
				const token = await client.getToken(tokenParams, { json: true });
				console.log(JSON.stringify(token));
				return token;
			} catch (err) {
				console.log(err);
			}
			break;
		}
		case 'Monday': {
			config.auth.tokenPath = process.env.MONDAY_AUTH_TOKEN_PATH;
			console.log('config part2', config);
			const client = await new AuthorizationCode(config);
			console.log(process.env.REDIRECT_URI);
			const tokenParams = {
				client_id: process.env.MONDAY_CLIENT_ID,
				client_secret: process.env.MONDAY_CLIENT_SECRET,
				code: req.query.code,
				redirect_uri: process.env.REDIRECT_URI,
				grant_type: 'authorization_code',
			};
			try {
				const token = await client.getToken(tokenParams);
				console.log(JSON.stringify(token));
				return token;
			} catch (err) {
				console.log(err);
			}
			break;
		}
	}
}

module.exports = { getCode, getAccessToken };
// https://app.asana.com/-/oauth_authorize?client_id=1201020003996762&redirect_uri=http://localhost:3000/callback&response_type=code

// https://trello.com/1/authorize?expiration=never&name=MyPersonalToken&scope=read&response_type=token&key=3492f763c2679f9368582e697655cfa0
