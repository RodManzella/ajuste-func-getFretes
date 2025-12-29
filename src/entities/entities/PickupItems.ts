import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Pickup } from "./Pickup";

@Index("pickup", ["pickup"], {})
@Index("produto", ["produto"], {})
@Entity("pickup_items", { schema: "ajuste_getfretes_db" })
export class PickupItems {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "pickup" })
  pickup: number;

  @Column("int", { name: "produto" })
  produto: number;

  @Column("int", { name: "quantidade" })
  quantidade: number;

  @Column("timestamp", {
    name: "data_hora_add",
    default: () => "CURRENT_TIMESTAMP",
  })
  dataHoraAdd: Date;

  @Column("int", { name: "usuario" })
  usuario: number;

  @Column("tinyint", { name: "conferido", width: 1, default: () => "'0'" })
  conferido: boolean;

  @ManyToOne(() => Pickup, (pickup) => pickup.pickupItems, {
    onDelete: "CASCADE",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "pickup", referencedColumnName: "id" }])
  pickup2: Pickup;
}
