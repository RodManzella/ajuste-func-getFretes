import { Column, Entity, Index } from "typeorm";

@Index("id", ["id"], {})
@Entity("envios_status", { schema: "ajuste_getfretes_db" })
export class EnviosStatus {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("varchar", { name: "descricao", nullable: true, length: 50 })
  descricao: string | null;
}
