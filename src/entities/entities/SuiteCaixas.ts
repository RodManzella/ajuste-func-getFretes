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
import { SuiteProdutos } from "./SuiteProdutos";

@Index("FK_suite_caixas.cliente_clientes.id", ["cliente"], {})
@Index("cliente", ["cliente"], {})
@Index("id", ["id"], {})
@Index("referencia", ["referencia"], {})
@Index("status", ["status"], {})
@Index("data_hora_add", ["dataHoraAdd"], {})
@Index("parceiro", ["parceiro"], {})
@Index("usuario", ["usuario"], {})
@Index("idx_suite_caixas_usuario_data", ["usuario", "dataHoraAdd"], {})
@Index("idx_suite_caixas_parceiro_data", ["parceiro", "dataHoraAdd"], {})
@Entity("suite_caixas", { schema: "ajuste_getfretes_db" })
export class SuiteCaixas {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "cliente" })
  cliente: number;

  @Column("text", { name: "descricao", nullable: true })
  descricao: string | null;

  @Column("varchar", { name: "imagem", nullable: true, length: 40 })
  imagem: string | null;

  @Column("int", { name: "status", nullable: true })
  status: number | null;

  @Column("int", { name: "usuario" })
  usuario: number;

  @Column("int", { name: "parceiro", nullable: true })
  parceiro: number | null;

  @Column("timestamp", {
    name: "data_hora_add",
    default: () => "CURRENT_TIMESTAMP",
  })
  dataHoraAdd: Date;

  @Column("text", { name: "obs", nullable: true })
  obs: string | null;

  @Column("varchar", { name: "cod_rastreio", nullable: true, length: 55 })
  codRastreio: string | null;

  @Column("tinyint", {
    name: "realocar",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  realocar: boolean | null;

  @Column("varchar", { name: "referencia", nullable: true, length: 11 })
  referencia: string | null;

  @Column("varchar", { name: "localizacao", nullable: true, length: 20 })
  localizacao: string | null;

  @Column("tinyint", { name: "warehouse", width: 1, default: () => "'0'" })
  warehouse: boolean;

  @Column("timestamp", { name: "data_armazenagem", nullable: true })
  dataArmazenagem: Date | null;

  @ManyToOne(() => Clientes, (clientes) => clientes.suiteCaixas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "cliente", referencedColumnName: "id" }])
  cliente2: Clientes;

  @OneToMany(() => SuiteProdutos, (suiteProdutos) => suiteProdutos.caixa2)
  suiteProdutos: SuiteProdutos[];
}
