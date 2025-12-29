import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("id", ["id"], {})
@Entity("servicos_extras", { schema: "ajuste_getfretes_db" })
export class ServicosExtras {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nome", nullable: true, length: 255 })
  nome: string | null;

  @Column("tinyint", { name: "acrescimo", nullable: true })
  acrescimo: number | null;

  @Column("tinyint", { name: "tipo_acrescimo", nullable: true, width: 1 })
  tipoAcrescimo: boolean | null;

  @Column("varchar", { name: "descricao", nullable: true, length: 255 })
  descricao: string | null;

  @Column("varchar", { name: "observacao", nullable: true, length: 400 })
  observacao: string | null;

  @Column("int", { name: "usuario" })
  usuario: number;

  @Column("timestamp", {
    name: "data_hora_add",
    default: () => "CURRENT_TIMESTAMP",
  })
  dataHoraAdd: Date;

  @Column("decimal", {
    name: "acrescimo_dolar",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  acrescimoDolar: string;
}
