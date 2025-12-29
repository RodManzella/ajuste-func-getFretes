import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Clientes } from "./Clientes";
import { PickupItems } from "./PickupItems";

@Index("usuario", ["usuario"], {})
@Index("cliente", ["cliente"], {})
@Entity("pickup", { schema: "ajuste_getfretes_db" })
export class Pickup {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "cliente" })
  cliente: number;

  @Column("int", { name: "usuario", nullable: true })
  usuario: number | null;

  @Column("timestamp", {
    name: "data_hora_add",
    default: () => "CURRENT_TIMESTAMP",
  })
  dataHoraAdd: Date;

  @Column("decimal", { name: "total", precision: 10, scale: 2 })
  total: string;

  @Column("tinyint", { name: "status", width: 1 })
  status: boolean;

  @Column("tinyint", { name: "status_pagamento", width: 1 })
  statusPagamento: boolean;

  @Column("tinyint", { name: "forma_pagamento", width: 1 })
  formaPagamento: boolean;

  @Column("varchar", { name: "referencia", length: 15 })
  referencia: string;

  @Column("date", { name: "data_pickup", nullable: true })
  dataPickup: string | null;

  @Column("varchar", { name: "terceiros", nullable: true, length: 255 })
  terceiros: string | null;

  @Column("text", { name: "obsinternas", nullable: true })
  obsinternas: string | null;

  @Column("int", { name: "caixas", default: () => "'0'" })
  caixas: number;

  @ManyToOne(() => Clientes, (clientes) => clientes.pickups, {
    onDelete: "CASCADE",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "cliente", referencedColumnName: "id" }])
  cliente2: Clientes;

  @OneToMany(() => PickupItems, (pickupItems) => pickupItems.pickup2)
  pickupItems: PickupItems[];
}
