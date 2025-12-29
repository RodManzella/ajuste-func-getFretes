import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("id", ["id"], {})
@Index("cliente", ["cliente"], {})
@Index("caixa", ["caixa"], {})
@Index("compra", ["compra"], {})
@Entity("pedidos", { schema: "ajuste_getfretes_db" })
export class Pedidos {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "cliente" })
  cliente: number;

  @Column("timestamp", { name: "data", default: () => "CURRENT_TIMESTAMP" })
  data: Date;

  @Column("timestamp", { name: "data_hora_upd", nullable: true })
  dataHoraUpd: Date | null;

  @Column("tinyint", { name: "status", width: 1 })
  status: boolean;

  @Column("tinyint", { name: "forma_pagamento", width: 1 })
  formaPagamento: boolean;

  @Column("decimal", { name: "total", precision: 10, scale: 2 })
  total: string;

  @Column("varchar", { name: "comprovante", nullable: true, length: 50 })
  comprovante: string | null;

  @Column("int", { name: "caixa", nullable: true })
  caixa: number | null;

  @Column("int", { name: "endereco", nullable: true })
  endereco: number | null;

  @Column("int", { name: "origem" })
  origem: number;

  @Column("text", { name: "idpaypal", nullable: true })
  idpaypal: string | null;

  @Column("text", { name: "idcambio", nullable: true })
  idcambio: string | null;

  @Column("varchar", { name: "cpf", nullable: true, length: 15 })
  cpf: string | null;

  @Column("int", { name: "compra", nullable: true })
  compra: number | null;

  @Column("varchar", { name: "obsinterna", nullable: true, length: 400 })
  obsinterna: string | null;
}
