import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";

class Pessoa extends Model{
    ehMaiorDeIdade() {
        return this.idade >=18;
    }
    apresentar(){
        return "Oi, meu nome é "+ this.nome + ", tenho "+this.idade+" de idade e meu e-mail é "+ this.email+".";
    }
    toJSON(){ //@Override - sobrescrita do método herdado. 
        const atributos = super.toJSON();
        return {
            ...atributos, //reuso do json como esta na const. Spread Operator (operador de espalhamento)
            maiorDeIdade: this.ehMaiorDeIdade(),
            apresentacao: this.apresentar()
        };
    }
}

Pessoa.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: DataTypes.STRING(100),
                allowNull: false,
                validate: { 
                    notEmpty: { msg: "O campo não pode ser vazio."}
                }
            },
            email: {
                type: DataTypes.STRING(100),
                allowNull: false,
                unique: { msg: "Email já cadastrado." },
                validate: {
                    isEmail: { msg: "Informe um endereço válido." }
                }
            },
            idade: {
                type: DataTypes.INTEGER, 
                allowNull: false,
                validate: { 
                    isInt: { msg: "A idade deve ser um numero inteiro."},
                    min: { 
                        args: [0],  //valor minimo
                        msg: "Idade não pode ser negativa." //caso seja menor que o minimo
                    }
                }
            }
        },
        {
            sequelize,
            modelName: "Pessoa",
            tableName: "pessoas",
            timestamps: true //adiciona campos "createdAt e updatedAt"
        }
);

export default Pessoa;