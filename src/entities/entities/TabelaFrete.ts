import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Transportes } from "./Transportes";

@Index("faixa", ["faixa", "transporte"], { unique: true })
@Index("transporte", ["transporte"], {})
@Entity("tabela_frete", { schema: "ajuste_getfretes_db" })
export class TabelaFrete {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "faixa" })
  faixa: number;

  @Column("decimal", { name: "valor", precision: 6, scale: 2 })
  valor: string;

  @Column("int", { name: "transporte" })
  transporte: number;

  @ManyToOne(() => Transportes, (transportes) => transportes.tabelaFretes, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "transporte", referencedColumnName: "id" }])
  transporte2: Transportes;
}
