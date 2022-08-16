const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection.js');

class User extends Model {}

User.init(
    {
       id: { // define an id column
        type: DataTypes.INTEGER,
        // eq of sqls not null
        allowNull: false,
        // instruct that this is the primary key
        primaryKey: true,
        // turn on an auto increment
        autoIncrement: true
       },
       username: {
           type: DataTypes.STRING,
           allowNull: false
       },
       email: {
           type: DataTypes.STRING,
           allowNull: false,
           uniqe: true,
           validate: {
               isEmail: true
           }
       },
       password: {
           type: DataTypes.STRING,
           allowNull: false,
           validate: {
               // this means that the password must be at least four characters long
               len: [4]
           }
       }
    },
    {
        // Table config options go here

        // imported sequelize connection
        sequelize,

        //dont automatically create createdAt/updatedAt timestamp fields
        timestamps : false,
        // Don't pluralize name of db table
        freezeTableName: true,
        // Use underscores instead of camel casing
        underscored: true,
        // make it so our model name stays lowercase in the database
        modelName: 'user'
    }
);

module.exports = User;