import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ComprasAssistidasPedidos } from "./ComprasAssistidasPedidos";

@Index("FK_compras_produtos.pedido_compras_pedidos.id", ["pedido"], {})
@Index("id", ["id"], {})
@Index("data_hora_add", ["dataHoraAdd"], {})
@Entity("compras_assistidas_produtos", { schema: "ajuste_getfretes_db" })
export class ComprasAssistidasProdutos {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "pedido" })
  pedido: number;

  @Column("text", { name: "url" })
  url: string;

  @Column("varchar", { name: "cor", nullable: true, length: 255 })
  cor: string | null;

  @Column("varchar", { name: "tamanho", nullable: true, length: 255 })
  tamanho: string | null;

  @Column("varchar", { name: "substituir_cor", nullable: true, length: 255 })
  substituirCor: string | null;

  @Column("varchar", {
    name: "substituir_tamanho",
    nullable: true,
    length: 255,
  })
  substituirTamanho: string | null;

  @Column("int", { name: "qtd" })
  qtd: number;

  @Column("text", { name: "obs", nullable: true })
  obs: string | null;

  @Column("int", { name: "usuario" })
  usuario: number;

  @Column("timestamp", {
    name: "data_hora_add",
    default: () => "CURRENT_TIMESTAMP",
  })
  dataHoraAdd: Date;

  @Column("decimal", {
    name: "valor_unidade",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  valorUnidade: string | null;

  @Column("decimal", {
    name: "impostos",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  impostos: string | null;

  @Column("decimal", {
    name: "servico",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  servico: string | null;

  @Column("varchar", { name: "produto", nullable: true, length: 255 })
  produto: string | null;

  @Column("varchar", { name: "referencia", nullable: true, length: 11 })
  referencia: string | null;

  @Column("tinyint", { name: "conferido", width: 1 })
  conferido: boolean;

  @Column("tinyint", { name: "sale_tax", width: 1, default: () => "'1'" })
  saleTax: boolean;

  @ManyToOne(
    () => ComprasAssistidasPedidos,
    (comprasAssistidasPedidos) =>
      comprasAssistidasPedidos.comprasAssistidasProdutos,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "pedido", referencedColumnName: "id" }])
  pedido2: ComprasAssistidasPedidos;
}
