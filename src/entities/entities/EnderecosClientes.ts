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
import { Paises } from "./Paises";
import { Envios } from "./Envios";

@Index("FK_enderecos_clientes.cliente_clientes.id", ["cliente"], {})
@Index("FK_enderecos_clientes.pais_paises.id", ["pais"], {})
@Index("id", ["id"], {})
@Index("data_hora_add", ["dataHoraAdd"], {})
@Index("documento", ["documento"], {})
@Entity("enderecos_clientes", { schema: "ajuste_getfretes_db" })
export class EnderecosClientes {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "cliente" })
  cliente: number;

  @Column("varchar", { name: "nome", nullable: true, length: 255 })
  nome: string | null;

  @Column("varchar", { name: "sobrenome", nullable: true, length: 255 })
  sobrenome: string | null;

  @Column("varchar", { name: "cep", nullable: true, length: 15 })
  cep: string | null;

  @Column("varchar", { name: "logradouro", nullable: true, length: 500 })
  logradouro: string | null;

  @Column("varchar", { name: "numero", nullable: true, length: 50 })
  numero: string | null;

  @Column("varchar", { name: "bairro", nullable: true, length: 70 })
  bairro: string | null;

  @Column("varchar", { name: "cidade", nullable: true, length: 80 })
  cidade: string | null;

  @Column("int", { name: "pais", nullable: true })
  pais: number | null;

  @Column("varchar", { name: "uf", nullable: true, length: 30 })
  uf: string | null;

  @Column("int", { name: "usuario", nullable: true })
  usuario: number | null;

  @Column("timestamp", {
    name: "data_hora_add",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  dataHoraAdd: Date | null;

  @Column("tinyint", { name: "padrao", nullable: true, width: 1 })
  padrao: boolean | null;

  @Column("tinyint", { name: "excluido", width: 1, default: () => "'0'" })
  excluido: boolean;

  @Column("varchar", { name: "documento", nullable: true, length: 20 })
  documento: string | null;

  @ManyToOne(() => Clientes, (clientes) => clientes.enderecosClientes, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "cliente", referencedColumnName: "id" }])
  cliente2: Clientes;

  @ManyToOne(() => Paises, (paises) => paises.enderecosClientes, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "pais", referencedColumnName: "id" }])
  pais2: Paises;

  @OneToMany(() => Envios, (envios) => envios.enderecoEntrega2)
  envios: Envios[];
}
