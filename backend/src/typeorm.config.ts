import { DataSource, DataSourceOptions } from 'typeorm';

import { Connection } from './connection';

const AppDataSource = new DataSource({
  ...(Connection as DataSourceOptions),
  entities: [__dirname + '*/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '*/migrations/*{.ts,.js}'],
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

export default AppDataSource;
