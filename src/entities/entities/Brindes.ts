import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BrindesClientes } from "./BrindesClientes";

@Entity("brindes", { schema: "ajuste_getfretes_db" })
export class Brindes {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "titulo", length: 50 })
  titulo: string;

  @OneToMany(
    () => BrindesClientes,
    (brindesClientes) => brindesClientes.brinde2
  )
  brindesClientes: BrindesClientes[];
}
