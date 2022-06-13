const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Post extends model {}

Post.init({
    
    blog_title: {
        type: DataTypes.TEXT
    },
    blog_content: {
        type: DataTypes.TEXT
    },
    },
{
    sequelize,
    timestamps: true,
    underscored: false,
    modelName: 'post'
});


module.exports = Post;