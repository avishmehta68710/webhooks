module.exports = (sequelize, DataTypes) => {
	const ReceiverPlatform = sequelize.define(
		'receiver_platforms',
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
			receiverId: {
				type: DataTypes.INTEGER,
			},
			accessToken: {
				type: DataTypes.STRING,
			},
		},
		{
			underscored: true,
		}
	);

	ReceiverPlatform.associate = (models) => {
		ReceiverPlatform.belongsTo(models.Platform, {
			foreignKey: 'platformKey',
			targetKey: 'key',
			as: 'platform',
		});

		ReceiverPlatform.belongsTo(models.Receiver, {
			foreignKey: 'receiverId',
			targetKey: 'id',
			as: 'receiver',
		});
	};
	return ReceiverPlatform;
};
