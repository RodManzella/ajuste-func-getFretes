import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("email", ["email", "vitalicio", "pedido"], { unique: true })
@Entity("compras_hotmart", { schema: "ajuste_getfretes_db" })
export class ComprasHotmart {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "email", length: 255 })
  email: string;

  @Column("timestamp", {
    name: "data_compra",
    default: () => "CURRENT_TIMESTAMP",
  })
  dataCompra: Date;

  @Column("timestamp", { name: "data_liberacao", nullable: true })
  dataLiberacao: Date | null;

  @Column("timestamp", { name: "data_validade", nullable: true })
  dataValidade: Date | null;

  @Column("tinyint", { name: "vitalicio", width: 1 })
  vitalicio: boolean;

  @Column("varchar", { name: "produto", nullable: true, length: 20 })
  produto: string | null;

  @Column("varchar", { name: "pedido", nullable: true, length: 40 })
  pedido: string | null;

  @Column("tinyint", { name: "deletado", width: 1, default: () => "'0'" })
  deletado: boolean;

  @Column("text", { name: "json", nullable: true })
  json: string | null;
}
