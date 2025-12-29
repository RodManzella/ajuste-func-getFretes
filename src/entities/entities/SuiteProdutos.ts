import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { SuiteCaixas } from "./SuiteCaixas";
import { Clientes } from "./Clientes";

@Index("FK_suite_produtos.caixa_suite_caixas.id", ["caixa"], {})
@Index("FK_suite_produtos.suite_clientes.id", ["suite"], {})
@Index("caixa", ["caixa"], {})
@Index("suite", ["suite"], {})
@Index("categoria", ["categoria"], {})
@Index("id", ["id"], {})
@Index("referencia", ["referencia"], {})
@Entity("suite_produtos", { schema: "ajuste_getfretes_db" })
export class SuiteProdutos {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "caixa", nullable: true })
  caixa: number | null;

  @Column("int", { name: "suite", nullable: true })
  suite: number | null;

  @Column("varchar", { name: "titulo", nullable: true, length: 500 })
  titulo: string | null;

  @Column("text", { name: "descricao", nullable: true })
  descricao: string | null;

  @Column("decimal", { name: "peso", nullable: true, precision: 10, scale: 4 })
  peso: string | null;

  @Column("int", { name: "qtd", nullable: true })
  qtd: number | null;

  @Column("text", { name: "imagem", nullable: true })
  imagem: string | null;

  @Column("text", { name: "imagens_extras", nullable: true })
  imagensExtras: string | null;

  @Column("tinyint", { name: "status", nullable: true, width: 1 })
  status: boolean | null;

  @Column("int", { name: "categoria", nullable: true })
  categoria: number | null;

  @Column("int", { name: "usuario" })
  usuario: number;

  @Column("timestamp", {
    name: "data_hora_add",
    default: () => "CURRENT_TIMESTAMP",
  })
  dataHoraAdd: Date;

  @Column("varchar", { name: "cod_rastreio", nullable: true, length: 21 })
  codRastreio: string | null;

  @Column("varchar", { name: "referencia", nullable: true, length: 11 })
  referencia: string | null;

  @Column("int", { name: "qtd_enviada", nullable: true })
  qtdEnviada: number | null;

  @Column("tinyint", { name: "avenda", width: 1, default: () => "'0'" })
  avenda: boolean;

  @Column("decimal", { name: "precovenda", precision: 10, scale: 2 })
  precovenda: string;

  @Column("varchar", { name: "linkcomparar", nullable: true, length: 400 })
  linkcomparar: string | null;

  @Column("decimal", { name: "adicionalcusto", precision: 10, scale: 2 })
  adicionalcusto: string;

  @Column("decimal", { name: "precocusto", precision: 10, scale: 2 })
  precocusto: string;

  @Column("tinyint", {
    name: "bloqueiaepacket",
    width: 1,
    default: () => "'0'",
  })
  bloqueiaepacket: boolean;

  @Column("tinyint", { name: "restrito", width: 1, default: () => "'0'" })
  restrito: boolean;

  @Column("tinyint", { name: "bateria", width: 1, default: () => "'0'" })
  bateria: boolean;

  @Column("tinyint", { name: "perfume", width: 1, default: () => "'0'" })
  perfume: boolean;

  @Column("varchar", { name: "ean", nullable: true, length: 40 })
  ean: string | null;

  @ManyToOne(() => SuiteCaixas, (suiteCaixas) => suiteCaixas.suiteProdutos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "caixa", referencedColumnName: "id" }])
  caixa2: SuiteCaixas;

  @ManyToOne(() => Clientes, (clientes) => clientes.suiteProdutos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "suite", referencedColumnName: "id" }])
  suite2: Clientes;
}
