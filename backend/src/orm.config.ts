import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'fluxo_atendimento',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
}