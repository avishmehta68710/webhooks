// // /* eslint-disable no-underscore-dangle */
const { Sequelize } = require('sequelize');
const { boot } = require('../boot');
let _sequelize;
module.exports.connection = {
	getSequelize: () => _sequelize,
};
const initModels = (sequelize, moduleModels) => {
	_sequelize = sequelize;
	const _models = {
		Actor: require('./Actor')(sequelize, Sequelize.DataTypes),
		ActorPlatform: require('./ActorPlatform')(sequelize, Sequelize.DataTypes),
		Event: require('./Event')(sequelize, Sequelize.DataTypes),
		Platform: require('./Platform')(sequelize, Sequelize.DataTypes),
		Receiver: require('./Receiver')(sequelize, Sequelize.DataTypes),
		ReceiverPlatform: require('./ReceiverPlatform')(
			sequelize,
			Sequelize.DataTypes
		),
		Task: require('./Task')(sequelize, Sequelize.DataTypes),
		...moduleModels,
		// User: require('./users')(sequelize, Sequelize.DataTypes);
	};

	try {
		sequelize.authenticate();
		console.log('Connection established.');
		sequelize
			.sync({})
			.then(() => console.log('Database sync successful.'))
			.catch((error) => {
				console.error('Database Sync error', error);
				process.exit(1);
			});
	} catch (error) {
		console.error('Database connection error');
		throw new Error(error);
	}

	Object.keys(_models).forEach((modelName) => {
		if ('associate' in _models[modelName]) {
			_models[modelName].associate(_models);
		}
	});
	boot(_models);
	return _models;
};

module.exports = initModels;
