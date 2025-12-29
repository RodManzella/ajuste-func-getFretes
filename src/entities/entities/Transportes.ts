import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TabelaFrete } from "./TabelaFrete";

@Index("id", ["id"], {})
@Entity("transportes", { schema: "ajuste_getfretes_db" })
export class Transportes {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "idusps" })
  idusps: number;

  @Column("varchar", { name: "nome", length: 80 })
  nome: string;

  @Column("tinyint", { name: "status", width: 1 })
  status: boolean;

  @OneToMany(() => TabelaFrete, (tabelaFrete) => tabelaFrete.transporte2)
  tabelaFretes: TabelaFrete[];
}
