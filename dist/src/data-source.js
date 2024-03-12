"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const node_path_1 = __importDefault(require("node:path"));
const typeorm_1 = require("typeorm");
require("dotenv/config");
const DataSourceConfig = () => {
    const entitiesPath = node_path_1.default.join(__dirname, "./entities/**.{ts, js}");
    const migrationsPath = node_path_1.default.join(__dirname, "./migrations/**.{ts, js}");
    if (!process.env.DATABASE_URL) {
        throw new Error("Env var DATABASE_URL does not exists");
    }
    return {
        type: "postgres",
        url: process.env.DATABASE_URL,
        synchronize: false,
        logging: true,
        entities: [entitiesPath],
        migrations: [migrationsPath]
    };
};
const AppDataSource = new typeorm_1.DataSource(DataSourceConfig());
exports.AppDataSource = AppDataSource;
