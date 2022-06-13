const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Comment extends Model{}

Comment.init({
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: UUIDV4,
        primaryKey: true,
     },
     comment_body: {
         type: DataTypes.TEXT,
         allowNull: false,
     },
 },
 {
     sequelize,
     timestamps: true,
     freezeTableName: false,
     underscored: false,
     modelName: 'comment',
    
});

module.exports = Comment;