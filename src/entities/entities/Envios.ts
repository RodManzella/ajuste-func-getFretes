import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BrindesClientes } from "./BrindesClientes";
import { Clientes } from "./Clientes";
import { Cupons } from "./Cupons";
import { EnderecosClientes } from "./EnderecosClientes";
import { EnviosProdutos } from "./EnviosProdutos";
import { EnviosProdutosExtras } from "./EnviosProdutosExtras";

@Index("FK_envios.cliente_clientes.id", ["cliente"], {})
@Index("FK_envios.cupom_cupons.id", ["cupom"], {})
@Index(
  "FK_envios.endereco_entrega_endereco_entrega.id",
  ["enderecoEntrega"],
  {}
)
@Index("referencia", ["referencia"], {})
@Index("id", ["id"], {})
@Index("compra", ["compra"], {})
@Index("rastreio", ["rastreio"], {})
@Index("data_alteracao", ["dataAlteracao"], {})
@Index("responsavel", ["responsavel"], {})
@Index("data_hora_add", ["dataHoraAdd"], {})
@Index("status", ["status"], {})
@Index("idx_envios_ordem", ["id", "dataAlteracao"], {})
@Index("idx_envios_status_origem", ["status", "origem"], {})
@Index("idx_envios_responsavel_envio", ["responsavel", "dataHoraEnvio"], {})
@Index("idx_envios_status_dataadd", ["status", "dataHoraAdd"], {})
@Index("idx_envios_dataenvio", ["dataHoraEnvio"], {})
@Index("idx_envios_cliente", ["cliente"], {})
@Index("idx_envios_cupom", ["cupom"], {})
@Entity("envios", { schema: "ajuste_getfretes_db" })
export class Envios {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "cliente", nullable: true })
  cliente: number | null;

  @Column("longtext", { name: "servicos_extras", nullable: true })
  servicosExtras: string | null;

  @Column("tinyint", { name: "forma_pagamento", nullable: true, width: 1 })
  formaPagamento: boolean | null;

  @Column("int", { name: "endereco_entrega", nullable: true })
  enderecoEntrega: number | null;

  @Column("tinyint", { name: "status", nullable: true, width: 1 })
  status: boolean | null;

  @Column("int", { name: "usuario" })
  usuario: number;

  @Column("int", { name: "responsavel" })
  responsavel: number;

  @Column("timestamp", {
    name: "data_hora_add",
    default: () => "CURRENT_TIMESTAMP",
  })
  dataHoraAdd: Date;

  @Column("varchar", { name: "rastreio", nullable: true, length: 30 })
  rastreio: string | null;

  @Column("text", { name: "obs", nullable: true })
  obs: string | null;

  @Column("text", { name: "obsinterna", nullable: true })
  obsinterna: string | null;

  @Column("timestamp", { name: "data_hora_envio", nullable: true })
  dataHoraEnvio: Date | null;

  @Column("timestamp", { name: "data_hora_preparacao", nullable: true })
  dataHoraPreparacao: Date | null;

  @Column("decimal", {
    name: "total_geral",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  totalGeral: string | null;

  @Column("varchar", { name: "debitos", nullable: true, length: 400 })
  debitos: string | null;

  @Column("decimal", {
    name: "total_declarado",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  totalDeclarado: string | null;

  @Column("int", { name: "forma_entrega", nullable: true })
  formaEntrega: number | null;

  @Column("decimal", { name: "frete", nullable: true, precision: 10, scale: 2 })
  frete: string | null;

  @Column("decimal", { name: "frete_custo", precision: 10, scale: 2 })
  freteCusto: string;

  @Column("decimal", { name: "peso", nullable: true, precision: 10, scale: 4 })
  peso: string | null;

  @Column("decimal", {
    name: "peso_total_real",
    nullable: true,
    precision: 10,
    scale: 4,
  })
  pesoTotalReal: string | null;

  @Column("decimal", { name: "multa", nullable: true, precision: 10, scale: 2 })
  multa: string | null;

  @Column("decimal", {
    name: "desconto",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  desconto: string | null;

  @Column("varchar", { name: "referencia", nullable: true, length: 25 })
  referencia: string | null;

  @Column("varchar", { name: "apelido", nullable: true, length: 30 })
  apelido: string | null;

  @Column("int", { name: "cupom", nullable: true })
  cupom: number | null;

  @Column("varchar", { name: "comprovante", nullable: true, length: 25 })
  comprovante: string | null;

  @Column("tinyint", {
    name: "liberadointegracao",
    width: 1,
    default: () => "'0'",
  })
  liberadointegracao: boolean;

  @Column("timestamp", {
    name: "data_alteracao",
    default: () => "CURRENT_TIMESTAMP",
  })
  dataAlteracao: Date;

  @Column("tinyint", { name: "origem", width: 1 })
  origem: boolean;

  @Column("tinyint", { name: "tipo_embalagem", width: 1, default: () => "'1'" })
  tipoEmbalagem: boolean;

  @Column("tinyint", { name: "label_impressa", width: 1, default: () => "'0'" })
  labelImpressa: boolean;

  @Column("tinyint", { name: "bloqueiadebito", width: 1 })
  bloqueiadebito: boolean;

  @Column("text", { name: "idpaypal", nullable: true })
  idpaypal: string | null;

  @Column("text", { name: "idcambio", nullable: true })
  idcambio: string | null;

  @Column("decimal", {
    name: "declararfrete",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  declararfrete: string;

  @Column("varchar", { name: "documento", nullable: true, length: 40 })
  documento: string | null;

  @Column("tinyint", { name: "tirarfoto", width: 1, default: () => "'0'" })
  tirarfoto: boolean;

  @Column("tinyint", { name: "tipocaixa", width: 1, default: () => "'0'" })
  tipocaixa: boolean;

  @Column("varchar", { name: "ehub_id", nullable: true, length: 20 })
  ehubId: string | null;

  @Column("int", { name: "compra", nullable: true })
  compra: number | null;

  @Column("tinyint", { name: "perfume", nullable: true, width: 1 })
  perfume: boolean | null;

  @Column("tinyint", { name: "bateria", nullable: true, width: 1 })
  bateria: boolean | null;

  @Column("varchar", { name: "localizacao", nullable: true, length: 15 })
  localizacao: string | null;

  @Column("int", { name: "largura", default: () => "'0'" })
  largura: number;

  @Column("int", { name: "altura", default: () => "'0'" })
  altura: number;

  @Column("int", { name: "comprimento", default: () => "'0'" })
  comprimento: number;

  @Column("char", { name: "zona", nullable: true, length: 5 })
  zona: string | null;

  @OneToMany(() => BrindesClientes, (brindesClientes) => brindesClientes.envio2)
  brindesClientes: BrindesClientes[];

  @ManyToOne(() => Clientes, (clientes) => clientes.envios, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "cliente", referencedColumnName: "id" }])
  cliente2: Clientes;

  @ManyToOne(() => Cupons, (cupons) => cupons.envios, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "cupom", referencedColumnName: "id" }])
  cupom2: Cupons;

  @ManyToOne(
    () => EnderecosClientes,
    (enderecosClientes) => enderecosClientes.envios,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "endereco_entrega", referencedColumnName: "id" }])
  enderecoEntrega2: EnderecosClientes;

  @OneToMany(() => EnviosProdutos, (enviosProdutos) => enviosProdutos.envio2)
  enviosProdutos: EnviosProdutos[];

  @OneToMany(
    () => EnviosProdutosExtras,
    (enviosProdutosExtras) => enviosProdutosExtras.envio2
  )
  enviosProdutosExtras: EnviosProdutosExtras[];
}
