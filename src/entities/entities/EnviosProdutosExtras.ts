import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Envios } from "./Envios";

@Index("envio", ["envio"], {})
@Entity("envios_produtos_extras", { schema: "ajuste_getfretes_db" })
export class EnviosProdutosExtras {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "envio" })
  envio: number;

  @Column("int", { name: "qtd" })
  qtd: number;

  @Column("varchar", { name: "descricao", length: 200 })
  descricao: string;

  @Column("decimal", { name: "valor", precision: 10, scale: 2 })
  valor: string;

  @Column("timestamp", {
    name: "data_hora_add",
    default: () => "CURRENT_TIMESTAMP",
  })
  dataHoraAdd: Date;

  @Column("varchar", { name: "familia", length: 10 })
  familia: string;

  @Column("int", { name: "usuario" })
  usuario: number;

  @ManyToOne(() => Envios, (envios) => envios.enviosProdutosExtras, {
    onDelete: "CASCADE",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "envio", referencedColumnName: "id" }])
  envio2: Envios;
}
