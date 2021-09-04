import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: process.env.DB_GCG__PASSWORD,
  database: 'gcg_db',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
