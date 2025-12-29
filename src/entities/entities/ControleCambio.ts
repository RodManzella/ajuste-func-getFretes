import { Column, Entity, Index } from "typeorm";

@Index("id", ["id", "token"], { unique: true })
@Entity("controle_cambio", { schema: "ajuste_getfretes_db" })
export class ControleCambio {
  @Column("varchar", { name: "id", length: 40 })
  id: string;

  @Column("varchar", { name: "token", length: 255 })
  token: string;

  @Column("timestamp", { name: "data", default: () => "CURRENT_TIMESTAMP" })
  data: Date;
}
