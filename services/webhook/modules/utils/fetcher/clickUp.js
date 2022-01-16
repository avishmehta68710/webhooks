const axios = require('axios');
require('dotenv').config({ path: __dirname + '/../../../../../.env' });

const accessToken = process.env.CLICK_UP_ACCESS_TOKEN;
async function authorize(body) {
	// const accessToken = await fetchToken({
	// receiverId: receiver.id,
	// platformKey: key,
	// });
	const clickUpTask = await axios.get(
		`https://api.clickup.com/api/v2/task/${body.task_id}`,
		{
			headers: {
				Authorization: `${accessToken}`,
			},
		}
	);
	return await clickUpTask.data;
	// console.log('clickup task', clickUpTask.data);
}

module.exports = { authorize };
