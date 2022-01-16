const express = require('express');
const bodyParser = require('body-parser');
const webhookHandler = require('./services/webhook/modules/webhook.resolver');
require('./models');
const port = process.env.PORT;
const app = express().use(bodyParser.json());
const { getCode, getAccessToken } = require('./services/webhook/auth/getCode');
app.get('/google70f1a9ad4ef5e215.html', express.static('googleDomain'));
// app.use(function (req, res, next) {
// 	res.status(200);
// 	res.send();
// });

// app.use(function (req, res, next) {
// 	console.log(req.body);
// 	res.send({ challenge: req.body.challenge });
// 	res.send();
// 	next();
// });

// app.use(function (req, res, next) {
// res.status(200).set({ 'X-Hook-Secret': req.headers['x-hook-secret'] });
// res.send();
// });

app.post('/webhook/:receiverId/:platform', (req, res) => {
	// console.log(req);
	try {
		webhookHandler(req, res);
		// res.send('POST request to the homepage');
	} catch (error) {
		console.log(error);
	}
});

app.get('/connect', (req, res) => {
	getCode(req, res);
});

app.get('/', (req, res) => {
	// getCode(req, res, 'Asana');
	res.send('welcome');
});

app.get('/callback', async (req, res) => {
	console.log(req.query);
	console.log(await getAccessToken(req, res, 'Asana'));
	res.send('logged in');
});

app.listen(port, () =>
	console.log(`Server started on http://localhost:${port}`)
);
