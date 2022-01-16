module.exports = (sequelize, DataTypes) => {
	const Task = sequelize.define(
		'tasks',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true,
			},
			platformKey: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			name: {
				type: DataTypes.STRING,
			},
			actorPlatformId: {
				type: DataTypes.INTEGER,
			},
			actorId: {
				type: DataTypes.INTEGER,
			},
			dueDate: {
				type: DataTypes.DATE,
			},
			status: {
				type: DataTypes.STRING,
			},
			refId: {
				type: DataTypes.STRING,
				unique: true,
			},
			taskType: {
				type: DataTypes.STRING,
			},
		},
		{
			underscored: true,
		}
	);

	Task.associate = (models) => {
		Task.belongsTo(models.Platform, {
			foreignKey: 'platformKey',
			targetKey: 'key',
			as: 'platform',
		});

		Task.belongsTo(models.ActorPlatform, {
			foreignKey: 'actorPlatformId',
			targetKey: 'id',
			as: 'actorPlatform',
		});

		Task.belongsTo(models.Actor, {
			foreignKey: 'actorId',
			targetKey: 'id',
			as: 'actor',
		});
	};
	return Task;
};
