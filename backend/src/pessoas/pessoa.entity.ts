import { Entity, Column } from "typeorm";
import { BaseEntity } from "../base-entity";

@Entity("pessoas")
export class Pessoa extends BaseEntity{
    @Column({ type: 'varchar', length: 9, nullable: false })
    tipo: string;
    @Column({ type: 'decimal'})
    comissao: number;
}