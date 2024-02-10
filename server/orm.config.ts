import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DB_GCG_URL,
  host: process.env.DB_GCG_HOST,
  port: 5432,
  username: process.env.DB_GCG_USERNAME,
  password: process.env.DB_GCG_PASSWORD,
  database: 'postgres',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
