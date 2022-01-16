module.exports = (sequelize, DataTypes) => {
	const Platform = sequelize.define(
		'platforms',
		{
			key: {
				type: DataTypes.STRING,
				allowNull: false,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING,
			},
			description: {
				type: DataTypes.STRING,
			},
			type: {
				type: DataTypes.STRING,
			},
			Events: {
				type: DataTypes.TEXT,
			},
			active: {
				type: DataTypes.BOOLEAN,
			},
		},
		{
			underscored: true,
		}
	);

	Platform.associate = (models) => {
		Platform.hasMany(models.Event, {
			foreignKey: 'platformKey',
			targetKey: 'key',
			as: 'platform',
		});
	};
	return Platform;
};
