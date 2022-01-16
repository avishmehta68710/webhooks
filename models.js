const _ = require('lodash');
require('dotenv').config();
const initModels = require('./lib/models');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
	process.env.POSTGRES_DB,
	process.env.POSTGRES_USER,
	process.env.POSTGRES_PASSWORD,
	{
		host: process.env.POSTGRES_HOST,
		dialect: 'postgres',
		port: process.env.POSTGRES_PORT,
		underscored: true,
		logging: false,
		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000,
		},
	}
);

const allModels = {};
const moduleModels = {};
_.forEach(allModels, (Model, name) => {
	moduleModels[name] = Model.init(sequelize, Sequelize);
});

const models = initModels(sequelize, moduleModels);

module.exports = { sequelize, models };
