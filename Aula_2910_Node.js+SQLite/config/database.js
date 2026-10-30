import { Sequelize } from "sequelize";
import path from "path";

const dbPath = path.resolve(import.meta.dirname, "../config/sqlite");

const sequelize = new Sequelize({
    dialect: "sqlite",
    logging: true,
    storage: dbPath,
});

export default sequelize;