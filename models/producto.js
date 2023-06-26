import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const Product = sequelize.define('productos', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey:true,
    autoIncrement:true
  },
  nombre: {
    type: DataTypes.STRING
  },
  detalle:{
    type:DataTypes.STRING
  }
},{
    createdAt:false,
    version:false,
    updatedAt:false
});

export {Product}