import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("cliente", ["cliente"], {})
@Index("id", ["id"], {})
@Index("produto_suite", ["produtoSuite"], {})
@Index("produto", ["produto"], {})
@Index("referencia", ["referencia"], {})
@Entity("pedidos_especiais", { schema: "ajuste_getfretes_db" })
export class PedidosEspeciais {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "cliente" })
  cliente: number;

  @Column("int", { name: "produto" })
  produto: number;

  @Column("int", { name: "produto_suite" })
  produtoSuite: number;

  @Column("timestamp", {
    name: "data_hora_add",
    default: () => "CURRENT_TIMESTAMP",
  })
  dataHoraAdd: Date;

  @Column("tinyint", { name: "status", width: 1 })
  status: boolean;

  @Column("varchar", { name: "referencia", length: 15 })
  referencia: string;

  @Column("tinyint", { name: "forma_pagamento", width: 1 })
  formaPagamento: boolean;

  @Column("text", { name: "comentario", nullable: true })
  comentario: string | null;

  @Column("text", { name: "observacoes", nullable: true })
  observacoes: string | null;

  @Column("text", { name: "obsinterna", nullable: true })
  obsinterna: string | null;

  @Column("text", { name: "images", nullable: true })
  images: string | null;

  @Column("int", { name: "usuario" })
  usuario: number;

  @Column("tinyint", { name: "app", width: 1, default: () => "'0'" })
  app: boolean;

  @Column("timestamp", { name: "data_hora_upd", nullable: true })
  dataHoraUpd: Date | null;

  @Column("varchar", { name: "pdf", nullable: true, length: 255 })
  pdf: string | null;

  @Column("varchar", { name: "video", nullable: true, length: 255 })
  video: string | null;

  @Column("tinyint", { name: "pelicula", width: 1 })
  pelicula: boolean;

  @Column("text", { name: "idpaypal", nullable: true })
  idpaypal: string | null;

  @Column("longtext", { name: "label", nullable: true })
  label: string | null;

  @Column("decimal", {
    name: "valor_extra",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  valorExtra: string;
}
