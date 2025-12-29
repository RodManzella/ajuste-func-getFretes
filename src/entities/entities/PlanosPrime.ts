import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PedidosPrime } from "./PedidosPrime";

@Entity("planos_prime", { schema: "ajuste_getfretes_db" })
export class PlanosPrime {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "titulo", length: 50 })
  titulo: string;

  @Column("decimal", { name: "valor_mes", precision: 10, scale: 2 })
  valorMes: string;

  @Column("decimal", { name: "valor_ano", precision: 10, scale: 2 })
  valorAno: string;

  @Column("decimal", { name: "cashback_ebay_m", precision: 10, scale: 2 })
  cashbackEbayM: string;

  @Column("decimal", { name: "cashback_ebay_y", precision: 10, scale: 2 })
  cashbackEbayY: string;

  @Column("decimal", { name: "cashback_amazon_m", precision: 10, scale: 2 })
  cashbackAmazonM: string;

  @Column("decimal", { name: "cashback_amazon_y", precision: 10, scale: 2 })
  cashbackAmazonY: string;

  @Column("decimal", { name: "descontos_pedidos", precision: 10, scale: 2 })
  descontosPedidos: string;

  @Column("decimal", { name: "cupom_desconto", precision: 10, scale: 2 })
  cupomDesconto: string;

  @Column("int", { name: "renovacao" })
  renovacao: number;

  @Column("int", { name: "armazenamento" })
  armazenamento: number;

  @Column("decimal", { name: "cashback_envios_m", precision: 10, scale: 2 })
  cashbackEnviosM: string;

  @Column("decimal", { name: "cashback_envios_y", precision: 10, scale: 2 })
  cashbackEnviosY: string;

  @Column("decimal", { name: "limite_cashback_m", precision: 10, scale: 2 })
  limiteCashbackM: string;

  @Column("decimal", { name: "limite_cashback_y", precision: 10, scale: 2 })
  limiteCashbackY: string;

  @OneToMany(() => PedidosPrime, (pedidosPrime) => pedidosPrime.plano2)
  pedidosPrimes: PedidosPrime[];
}
