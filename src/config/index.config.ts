export const TestTypeORMConfig = {
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'digitoo_test',
  entities: ['./**/*.entity.ts'],
  synchronize: true,
};

export const AuthSecret = 'topsecrettoken';
