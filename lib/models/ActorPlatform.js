module.exports = (sequelize, DataTypes) => {
	const ActorPlatform = sequelize.define(
		'actor_platforms',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
			},
			refId: {
				type: DataTypes.STRING,
			},
			title: {
				type: DataTypes.STRING,
			},
			profilePic: {
				type: DataTypes.STRING,
			},
			actorId: {
				type: DataTypes.INTEGER,
			},
			actorUsername: {
				type: DataTypes.STRING,
			},
			platformKey: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			actorPlatformKey: {
				type: DataTypes.STRING,
				unique: true,
			},
			data: {
				type: DataTypes.JSONB,
			},
		},
		{
			underscored: true,
		}
	);
	ActorPlatform.associate = (models) => {
		ActorPlatform.belongsTo(models.Actor, {
			foreignKey: 'actorId',
			targetKey: 'id',
			as: 'actor',
		});
	};
	return ActorPlatform;
};
