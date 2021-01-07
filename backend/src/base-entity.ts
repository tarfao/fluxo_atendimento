import { PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

/**Entidade base para as demais.
 * Aqui encontramos os campos que sao comuns em todas as tabelas
 */
export class BaseEntity {
    //autoincrement
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ nullable: true })
    created_at: Date;

    @CreateDateColumn({ nullable: true })
    updated_at: Date;
}