import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("cliente", ["cliente"], {})
@Index("id", ["id"], {})
@Index("usuario", ["usuario"], {})
@Entity("caixas_encaminhadas", { schema: "ajuste_getfretes_db" })
export class CaixasEncaminhadas {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { primary: true, name: "cliente" })
  cliente: number;

  @Column("tinyint", { name: "status", width: 1 })
  status: boolean;

  @Column("int", { name: "usuario" })
  usuario: number;

  @Column("timestamp", {
    name: "data_hora_add",
    default: () => "CURRENT_TIMESTAMP",
  })
  dataHoraAdd: Date;

  @Column("varchar", { name: "rastreio", length: 40 })
  rastreio: string;
}
