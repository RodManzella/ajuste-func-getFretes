import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { EnderecosClientes } from "./EnderecosClientes";

@Index("id", ["id"], {})
@Entity("paises", { schema: "ajuste_getfretes_db" })
export class Paises {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nome", nullable: true, length: 50 })
  nome: string | null;

  @Column("varchar", { name: "idvipparcel", nullable: true, length: 5 })
  idvipparcel: string | null;

  @OneToMany(
    () => EnderecosClientes,
    (enderecosClientes) => enderecosClientes.pais2
  )
  enderecosClientes: EnderecosClientes[];
}
