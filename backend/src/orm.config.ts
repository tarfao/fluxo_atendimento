import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'fluxo_atendimento',
    //caso nao fizesse esse match, eu deveria declarar todas as entidades criadas!
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
}