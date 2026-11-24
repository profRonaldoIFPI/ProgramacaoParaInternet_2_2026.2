import { DataTypes, Model } from "sequelize"; 
import sequelize from "../config/database.js";
import bcrypt from "bcrypt";

class Usuario extends Model{}

Usuario.init(
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        login:{
            type: DataTypes.STRING(30),
            allowNull: false,
            validate: {
                notEmpty: { msg: "Não pode ser nulo."}
            }
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: "Usuario",
        tableName: "usuarios",
        timestamps: true,
        hooks: { 
            beforeSave: async (usuario)=> { // sempre executa antes de create(), update(), save() 
               usuario.senha = await bcrypt.hash(usuario.senha, 10); 
            }
        }
    }
);

export default Usuario;