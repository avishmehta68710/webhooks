const { models } = require('../../../../models');

const fetchToken = async ({ receiverId, platformKey }) => {
	const { accessToken } = await models.ReceiverPlatform.findOne({
		where: {
			receiverId,
			platformKey,
		},
	});
	console.log('accessToken', accessToken);
	if (!accessToken) {
		throw new Error('No access tokens returned');
	}
	return accessToken;
};

module.exports = { fetchToken };
