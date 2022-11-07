module.exports = (sequelize, DataTypes) => {
    const Notes = sequelize.define(
        "Notes",
        {
            id:{
                type:DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            title:{
                type:DataTypes.STRING(40),
                allowNull:false
            },
            desc:{
                type:DataTypes.TEXT
            },
            createdAt:{
                type:DataTypes.DATE,
                allowNull:false
            },
            updatedAt:{
                type:DataTypes.DATE,
                allowNull:false
            }
        },
        {
            tableName:"notes" //sesuaikan dengan nama table di database
        }
    );

    return Notes; 
}