import { config } from 'dotenv';
import { DataSourceOptions } from 'typeorm';

config();

export const Connection: DataSourceOptions = {
  type: process.env.TYPEORM_CONNECTION as 'postgres',
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  port: Number(process.env.TYPEORM_PORT),
};
