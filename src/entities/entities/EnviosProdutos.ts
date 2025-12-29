import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Envios } from "./Envios";

@Index("FK_envios_produtos.envio_envios.id", ["envio"], {})
@Index("produto", ["produto"], {})
@Index("id", ["id"], {})
@Entity("envios_produtos", { schema: "ajuste_getfretes_db" })
export class EnviosProdutos {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "envio" })
  envio: number;

  @Column("int", { name: "produto" })
  produto: number;

  @Column("int", { name: "qtd", nullable: true })
  qtd: number | null;

  @Column("int", { name: "qtd_declarado", nullable: true })
  qtdDeclarado: number | null;

  @Column("int", { name: "qtd_real" })
  qtdReal: number;

  @Column("varchar", {
    name: "descricao_declarado",
    nullable: true,
    length: 255,
  })
  descricaoDeclarado: string | null;

  @Column("varchar", { name: "descricao_real", nullable: true, length: 255 })
  descricaoReal: string | null;

  @Column("decimal", {
    name: "valor_declarado",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  valorDeclarado: string | null;

  @Column("decimal", { name: "valor_declarado_real", precision: 10, scale: 2 })
  valorDeclaradoReal: string;

  @Column("tinyint", { name: "conferido", width: 1 })
  conferido: boolean;

  @Column("int", { name: "usuario", nullable: true })
  usuario: number | null;

  @Column("timestamp", {
    name: "data_hora_add",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  dataHoraAdd: Date | null;

  @Column("float", { name: "peso_real", precision: 10, scale: 4 })
  pesoReal: number;

  @Column("varchar", { name: "familia", nullable: true, length: 10 })
  familia: string | null;

  @ManyToOne(() => Envios, (envios) => envios.enviosProdutos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "envio", referencedColumnName: "id" }])
  envio2: Envios;
}
