import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("id", ["id"], {})
@Index("produto", ["produto"], {})
@Index("pedido", ["pedido"], {})
@Entity("pedidos_produtos", { schema: "ajuste_getfretes_db" })
export class PedidosProdutos {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "produto" })
  produto: number;

  @Column("decimal", { name: "valor", precision: 10, scale: 2 })
  valor: string;

  @Column("int", { name: "qtd" })
  qtd: number;

  @Column("int", { name: "pedido" })
  pedido: number;

  @Column("tinyint", { name: "conferido", width: 1, default: () => "'0'" })
  conferido: boolean;
}
