const axios = require('axios');
require('dotenv').config({ path: __dirname + '/../../../../../.env' });

const memberId = process.env.TRELLO_MEMBER_ID;
const APIkey = process.env.TRELLO_APIKEY;
const token = process.env.TRELLO_TOKEN;

async function fetchTrelloUser() {
	const url = `https://api.trello.com/1/members/${memberId}?key=${APIkey}&token=${token}`;
	const response = await axios.get(url);
	console.log(response.data);
	return response.data;
}

async function fetchDueDate(actionId) {
	const url = `https://api.trello.com/1/actions/${actionId}/card?key=${APIkey}&token=${token}`;
	const response = await axios.get(url);
	return response.data;
}

module.exports = { fetchTrelloUser, fetchDueDate };
