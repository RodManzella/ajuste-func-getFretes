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
import { ComprasAssistidasProdutos } from "./ComprasAssistidasProdutos";

@Index("FK_compras_assistidas_pedidos.cliente_clientes.id", ["cliente"], {})
@Index("id", ["id"], {})
@Index("referencia", ["referencia"], {})
@Index("data_hora_add", ["dataHoraAdd"], {})
@Index("data_hora_upd", ["dataHoraUpd"], {})
@Entity("compras_assistidas_pedidos", { schema: "ajuste_getfretes_db" })
export class ComprasAssistidasPedidos {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "cliente" })
  cliente: number;

  @Column("decimal", { name: "frete", nullable: true, precision: 10, scale: 2 })
  frete: string | null;

  @Column("decimal", {
    name: "freteuscloser",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  freteuscloser: string;

  @Column("int", { name: "usuario" })
  usuario: number;

  @Column("timestamp", {
    name: "data_hora_add",
    default: () => "CURRENT_TIMESTAMP",
  })
  dataHoraAdd: Date;

  @Column("decimal", { name: "total", nullable: true, precision: 10, scale: 2 })
  total: string | null;

  @Column("int", { name: "taxas", default: () => "'0'" })
  taxas: number;

  @Column("int", { name: "status", nullable: true })
  status: number | null;

  @Column("int", { name: "forma_pagamento", nullable: true })
  formaPagamento: number | null;

  @Column("varchar", { name: "comprovante", nullable: true, length: 55 })
  comprovante: string | null;

  @Column("tinyint", { name: "new", nullable: true, width: 1 })
  new: boolean | null;

  @Column("varchar", { name: "referencia", nullable: true, length: 11 })
  referencia: string | null;

  @Column("varchar", { name: "apelido", nullable: true, length: 25 })
  apelido: string | null;

  @Column("int", { name: "status_pagamento", nullable: true })
  statusPagamento: number | null;

  @Column("varchar", { name: "rastreio", nullable: true, length: 20 })
  rastreio: string | null;

  @Column("text", { name: "comentario", nullable: true })
  comentario: string | null;

  @Column("int", { name: "calcular_frete", default: () => "'0'" })
  calcularFrete: number;

  @Column("varchar", { name: "cupom_desconto", nullable: true, length: 60 })
  cupomDesconto: string | null;

  @Column("decimal", {
    name: "desconto",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  desconto: string;

  @Column("int", { name: "out_stock" })
  outStock: number;

  @Column("text", { name: "pedido", nullable: true })
  pedido: string | null;

  @Column("int", { name: "taxauscloser", default: () => "'0'" })
  taxauscloser: number;

  @Column("tinyint", { name: "app", width: 1, default: () => "'0'" })
  app: boolean;

  @Column("timestamp", { name: "data_hora_upd", nullable: true })
  dataHoraUpd: Date | null;

  @Column("int", { name: "blockedicao", default: () => "'0'" })
  blockedicao: number;

  @Column("decimal", { name: "custo", nullable: true, precision: 10, scale: 2 })
  custo: string | null;

  @Column("text", { name: "idpaypal", nullable: true })
  idpaypal: string | null;

  @Column("text", { name: "idcambio", nullable: true })
  idcambio: string | null;

  @Column("tinyint", { name: "amzuscloser", width: 1, default: () => "'0'" })
  amzuscloser: boolean;

  @Column("tinyint", { name: "amzamanda", width: 1, default: () => "'0'" })
  amzamanda: boolean;

  @Column("decimal", { name: "debitar", precision: 10, scale: 2 })
  debitar: string;

  @ManyToOne(() => Clientes, (clientes) => clientes.comprasAssistidasPedidos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "cliente", referencedColumnName: "id" }])
  cliente2: Clientes;

  @OneToMany(
    () => ComprasAssistidasProdutos,
    (comprasAssistidasProdutos) => comprasAssistidasProdutos.pedido2
  )
  comprasAssistidasProdutos: ComprasAssistidasProdutos[];
}
