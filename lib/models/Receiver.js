module.exports = (sequelize, Sequelize) => {
	const Receiver = sequelize.define(
		'receivers',
		{
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true,
			},
			createdById: {
				type: Sequelize.INTEGER,
			},
			updatedById: {
				type: Sequelize.INTEGER,
			},
			token: {
				type: Sequelize.STRING,
				allowNull: true,
			},
		},
		{
			underscored: true,
			paranoid: true,
		}
	);

	Receiver.associate = (models) => {
		Receiver.hasOne(models.Event, {
			foreignKey: 'receiverId',
			targetKey: 'id',
		});
	};
	return Receiver;
};
