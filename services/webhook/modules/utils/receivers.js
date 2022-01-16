const { models } = require('../../../../models');
async function addReceiver(id) {
	const receiverData = {
		id: id,
		createdById: id,
		updatedById: id,
	};
	try {
		const receiver = models.Receiver.create(receiverData);
		return receiver;
	} catch (error) {
		console.log(error);
	}
}

async function getReceiver(id) {
	let receiver = await models.Receiver.findByPk(id);
	if (!receiver) {
		throw new Error('No such receiver found. Please create the receiver.');
	} else {
		console.log(`Receiver found.`);
	}
	return receiver;
}

module.exports = {
	addReceiver,
	getReceiver,
};
