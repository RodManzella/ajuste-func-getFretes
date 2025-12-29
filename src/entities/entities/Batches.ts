import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("caixa", ["caixa", "tipo"], { unique: true })
@Index("usuario", ["usuario"], {})
@Index("data", ["data"], {})
@Entity("batches", { schema: "ajuste_getfretes_db" })
export class Batches {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "caixa", length: 20 })
  caixa: string;

  @Column("tinyint", { name: "tipo", width: 1 })
  tipo: boolean;

  @Column("tinyint", { name: "status", width: 1 })
  status: boolean;

  @Column("int", { name: "usuario" })
  usuario: number;

  @Column("timestamp", { name: "data", default: () => "CURRENT_TIMESTAMP" })
  data: Date;
}
