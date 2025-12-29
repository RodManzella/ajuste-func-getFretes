import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Envios } from "./Envios";

@Index("id", ["id"], {})
@Index("codigo", ["codigo"], {})
@Index("valido_ate", ["validoAte"], {})
@Index("data_hora_add", ["dataHoraAdd"], {})
@Entity("cupons", { schema: "ajuste_getfretes_db" })
export class Cupons {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "codigo", nullable: true, length: 30 })
  codigo: string | null;

  @Column("date", { name: "valido_ate", nullable: true })
  validoAte: string | null;

  @Column("int", { name: "qtd_pedidos", nullable: true })
  qtdPedidos: number | null;

  @Column("int", { name: "afiliado", nullable: true })
  afiliado: number | null;

  @Column("int", { name: "suite" })
  suite: number;

  @Column("int", { name: "totalcliente", default: () => "'0'" })
  totalcliente: number;

  @Column("int", { name: "desconto_perc", nullable: true })
  descontoPerc: number | null;

  @Column("int", { name: "desconto_percship", default: () => "'0'" })
  descontoPercship: number;

  @Column("decimal", {
    name: "desconto_amountship",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  descontoAmountship: string;

  @Column("int", { name: "usuario", nullable: true })
  usuario: number | null;

  @Column("timestamp", {
    name: "data_hora_add",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  dataHoraAdd: Date | null;

  @OneToMany(() => Envios, (envios) => envios.cupom2)
  envios: Envios[];
}
