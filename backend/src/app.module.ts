import { Module } from '@nestjs/common';
import { PessoasModule } from './pessoas/pessoas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './orm.config';

@Module({
  imports: [PessoasModule, TypeOrmModule.forRoot(config)],
})
export class AppModule {}
