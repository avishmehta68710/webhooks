const { models } = require('../../../models');
const { getParser } = require('./parser');
const { getReceiver } = require('./utils/receivers');

module.exports = async function webhookHandler(req, res) {
	if (req.method !== 'POST') {
		res.setHeader('Allow', 'POST');
		res.status(405).end('Method Not Allowed');
		return;
	}
	try {
		// console.log(req.body);
		const { platform, receiverId } = req.params;
		const parser = getParser(platform);
		const receiver = await getReceiver(receiverId);
		const actorsData = await parser.parseActors(req, receiver);
		let actors = [];
		for (let actorData of actorsData) {
			let [instance, created] = await models.Actor.upsert(actorData);
			actors.push(instance.toJSON());
			if (actorData.email !== '') {
				let [instance, created] = await models.Actor.upsert(actorData);
				actors.push(instance.toJSON());
			}
			console.log('ACTORS', actorData);
		}
		const actorPlatformsData = await parser.parseActorPlatforms(
			req,
			receiver,
			actors
		);
		let actorPlatforms = [];
		for (let actorPlatformData of actorPlatformsData) {
			console.log('ACTOR_PLATFORMS', actorPlatformData);
			let [instance, created] = await models.ActorPlatform.upsert(
				actorPlatformData
			);
			actorPlatforms.push(instance.toJSON());
		}
		const eventsData = parser.parseEvents(req, receiver, actors, actorPlatforms);
		const events = await models.Event.bulkCreate(eventsData);
		console.log('EVENTS ', events);
		// const tasksData = await parser.parseTasks(
		// 	req,
		// 	receiver,
		// 	actors,
		// 	actorPlatforms,
		// 	events
		// );
		// let tasks = [];
		// console.log('TASK DATA is', tasksData);
		// for (let taskData of tasksData) {
		// 	const [instance, created] = await models.Task.upsert(taskData);
		// 	// console.log("TASK DATA ", taskData);
		// 	tasks.push(taskData);
		// }
		// console.log("ACTORS", actors);
		// console.log("ACTOR_PLATFORMS", actorPlatforms);
		// console.log("EVENTS", events);
	} catch (e) {
		console.log(e);
	}
};
