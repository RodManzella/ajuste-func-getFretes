import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("registro", ["registro"], {})
@Index("usuario", ["usuario"], {})
@Index("id", ["id"], {})
@Entity("auditoria", { schema: "ajuste_getfretes_db" })
export class Auditoria {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "url", length: 255 })
  url: string;

  @Column("tinyint", { name: "tipo", width: 1 })
  tipo: boolean;

  @Column("text", { name: "query_string" })
  queryString: string;

  @Column("timestamp", { name: "data", default: () => "CURRENT_TIMESTAMP" })
  data: Date;

  @Column("int", { name: "registro", nullable: true })
  registro: number | null;

  @Column("int", { name: "usuario", nullable: true })
  usuario: number | null;

  @Column("timestamp", {
    name: "data_hora_add",
    default: () => "CURRENT_TIMESTAMP",
  })
  dataHoraAdd: Date;

  @Column("varchar", { name: "ip", nullable: true, length: 15 })
  ip: string | null;

  @Column("varchar", { name: "tbl", nullable: true, length: 15 })
  tbl: string | null;
}
