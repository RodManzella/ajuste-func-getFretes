import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("auditoria_acoes", { schema: "ajuste_getfretes_db" })
export class AuditoriaAcoes {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "descricao", nullable: true, length: 15 })
  descricao: string | null;
}
