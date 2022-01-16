const createPlatform = require('./createPlatforms');

const boot = (models) => {
	createPlatform(models);
};

module.exports = { boot };
