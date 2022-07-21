"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = __importDefault(require("../Entity/User"));
const dataSource = new typeorm_1.DataSource({
    name: "firstconnection",
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Password@12345",
    database: "user_accounts",
    synchronize: true,
    logging: true,
    entities: [User_1.default]
});
// await dataSource.initialize()
exports.default = dataSource;
//}
