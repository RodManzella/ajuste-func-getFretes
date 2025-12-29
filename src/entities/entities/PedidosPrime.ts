import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PlanosPrime } from "./PlanosPrime";
import { Clientes } from "./Clientes";

@Index("cliente", ["cliente"], {})
@Index("plano", ["plano"], {})
@Entity("pedidos_prime", { schema: "ajuste_getfretes_db" })
export class PedidosPrime {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "cliente" })
  cliente: number;

  @Column("int", { name: "plano" })
  plano: number;

  @Column("decimal", { name: "valor_pago", precision: 10, scale: 2 })
  valorPago: string;

  @Column("tinyint", { name: "tipo", width: 1 })
  tipo: boolean;

  @Column("timestamp", {
    name: "data_compra",
    default: () => "CURRENT_TIMESTAMP",
  })
  dataCompra: Date;

  @Column("timestamp", {
    name: "data_ativacao",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  dataAtivacao: Date | null;

  @Column("timestamp", { name: "data_validade", nullable: true })
  dataValidade: Date | null;

  @Column("decimal", { name: "cashback_ebay", precision: 10, scale: 2 })
  cashbackEbay: string;

  @Column("decimal", { name: "cashback_amazon", precision: 10, scale: 2 })
  cashbackAmazon: string;

  @Column("decimal", { name: "descontos_pedidos", precision: 10, scale: 2 })
  descontosPedidos: string;

  @Column("decimal", { name: "cupom_desconto", precision: 10, scale: 2 })
  cupomDesconto: string;

  @Column("int", { name: "renovacao" })
  renovacao: number;

  @Column("int", { name: "armazenamento" })
  armazenamento: number;

  @Column("decimal", { name: "cashback_envios", precision: 10, scale: 2 })
  cashbackEnvios: string;

  @Column("decimal", { name: "limite_cashback", precision: 10, scale: 2 })
  limiteCashback: string;

  @ManyToOne(() => PlanosPrime, (planosPrime) => planosPrime.pedidosPrimes, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "plano", referencedColumnName: "id" }])
  plano2: PlanosPrime;

  @ManyToOne(() => Clientes, (clientes) => clientes.pedidosPrimes, {
    onDelete: "CASCADE",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "cliente", referencedColumnName: "id" }])
  cliente2: Clientes;
}
