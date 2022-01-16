const {
	EVENT_MODULES,
} = require('../../services/webhook/modules/utils/constant');
module.exports = (sequelize, DataTypes) => {
	const Event = sequelize.define(
		'events',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true,
			},
			receiverId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			platformKey: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			message: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			eventType: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			actorId: {
				type: DataTypes.INTEGER,
			},
			actorPlatformId: {
				type: DataTypes.INTEGER,
			},
			modules: {
				type: DataTypes.ENUM([
					EVENT_MODULES.SCM,
					EVENT_MODULES.TIME,
					EVENT_MODULES.TASK,
				]),
			},
			data: {
				type: DataTypes.JSONB,
			},
		},
		{
			underscored: true,
		}
	);
	Event.associate = (models) => {
		Event.belongsTo(models.Actor, {
			foreignKey: 'actorId',
			targetKey: 'id',
			as: 'actor',
		});
	};
	return Event;
};
