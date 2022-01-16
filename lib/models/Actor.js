module.exports = (sequelize, DataTypes) => {
	const Actor = sequelize.define(
		'actors',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			email: {
				type: DataTypes.STRING,
			},
			title: {
				type: DataTypes.STRING,
			},
			profilePics: {
				type: DataTypes.STRING,
			},
			username: {
				type: DataTypes.STRING,
				unique: true,
			},
		},
		{
			underscored: true,
		}
	);

	Actor.associate = (models) => {
		Actor.hasMany(models.Event, {
			foreignKey: 'actorId',
			targetKey: 'id',
			as: 'events',
		});

		Actor.hasMany(models.ActorPlatform, {
			foreignKey: 'actorId',
			targetKey: 'id',
		});
	};
	return Actor;
};
