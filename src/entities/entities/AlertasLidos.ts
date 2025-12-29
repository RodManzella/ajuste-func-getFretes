import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("cliente", ["cliente"], {})
@Index("alerta", ["alerta"], {})
@Entity("alertas_lidos", { schema: "ajuste_getfretes_db" })
export class AlertasLidos {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "cliente" })
  cliente: number;

  @Column("int", { name: "alerta" })
  alerta: number;

  @Column("timestamp", {
    name: "data_hora_add",
    default: () => "CURRENT_TIMESTAMP",
  })
  dataHoraAdd: Date;
}
