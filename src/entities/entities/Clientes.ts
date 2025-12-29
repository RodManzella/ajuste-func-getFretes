import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BrindesClientes } from "./BrindesClientes";
import { ComprasAssistidasPedidos } from "./ComprasAssistidasPedidos";
import { EnderecosClientes } from "./EnderecosClientes";
import { Envios } from "./Envios";
import { PedidosPrime } from "./PedidosPrime";
import { Pickup } from "./Pickup";
import { SuiteCaixas } from "./SuiteCaixas";
import { SuiteProdutos } from "./SuiteProdutos";

@Index("id", ["id"], {})
@Index("e_mail", ["eMail"], {})
@Index("senha", ["senha"], {})
@Index("fk_pubid", ["origemPublicidade"], {})
@Index("status", ["status"], {})
@Index("indicado", ["indicado"], {})
@Index("data_hora_add", ["dataHoraAdd"], {})
@Index("idx_clientes_afiliado_status", ["status", "afiliadoId"], {})
@Index("idx_clientes_token_pack", ["token", "chaveCripto", "ivCripto"], {})
@Index("ft_clientes_nome", ["nome"], { fulltext: true })
@Entity("clientes", { schema: "ajuste_getfretes_db" })
export class Clientes {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nome", length: 100 })
  nome: string;

  @Column("varchar", { name: "e_mail", length: 50 })
  eMail: string;

  @Column("varchar", { name: "senha", length: 128 })
  senha: string;

  @Column("varchar", { name: "celular", nullable: true, length: 16 })
  celular: string | null;

  @Column("varchar", { name: "fcm", nullable: true, length: 255 })
  fcm: string | null;

  @Column("varchar", { name: "telefone", nullable: true, length: 16 })
  telefone: string | null;

  @Column("date", { name: "dn", nullable: true })
  dn: string | null;

  @Column("varchar", { name: "cpf", nullable: true, length: 11 })
  cpf: string | null;

  @Column("smallint", { name: "status" })
  status: number;

  @Column("tinyint", { name: "newsletter", nullable: true, width: 1 })
  newsletter: boolean | null;

  @Column("tinyint", { name: "situacao", nullable: true, width: 1 })
  situacao: boolean | null;

  @Column("int", { name: "origem_publicidade", nullable: true })
  origemPublicidade: number | null;

  @Column("varchar", { name: "indicado", nullable: true, length: 15 })
  indicado: string | null;

  @Column("varchar", { name: "afiliado_id", nullable: true, length: 15 })
  afiliadoId: string | null;

  @Column("decimal", {
    name: "credito",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  credito: string | null;

  @Column("int", { name: "usuario", nullable: true })
  usuario: number | null;

  @Column("datetime", {
    name: "data_hora_add",
    default: () => "CURRENT_TIMESTAMP",
  })
  dataHoraAdd: Date;

  @Column("tinyint", { name: "conta_verificada", nullable: true })
  contaVerificada: number | null;

  @Column("varchar", { name: "login", nullable: true, length: 50 })
  login: string | null;

  @Column("varchar", { name: "codigo_verificacao", nullable: true, length: 32 })
  codigoVerificacao: string | null;

  @Column("date", { name: "db_inicial", nullable: true })
  dbInicial: string | null;

  @Column("date", { name: "db_final", nullable: true })
  dbFinal: string | null;

  @Column("int", { name: "perc_afiliados", nullable: true })
  percAfiliados: number | null;

  @Column("tinyint", { name: "new", width: 1 })
  new: boolean;

  @Column("int", { name: "pais", nullable: true })
  pais: number | null;

  @Column("tinyint", { name: "exportado", nullable: true, width: 1 })
  exportado: boolean | null;

  @Column("varchar", { name: "versao_app", nullable: true, length: 10 })
  versaoApp: string | null;

  @Column("int", { name: "paypal", default: () => "'0'" })
  paypal: number;

  @Column("int", { name: "pontos" })
  pontos: number;

  @Column("varchar", { name: "ip", nullable: true, length: 30 })
  ip: string | null;

  @Column("tinyint", { name: "prime", width: 1, default: () => "'0'" })
  prime: boolean;

  @Column("tinyint", { name: "ajuda", width: 1, default: () => "'1'" })
  ajuda: boolean;

  @Column("varchar", { name: "instrucaocaixas", nullable: true, length: 200 })
  instrucaocaixas: string | null;

  @Column("varchar", { name: "anotacoes", nullable: true, length: 400 })
  anotacoes: string | null;

  @Column("varchar", { name: "appleuser", nullable: true, length: 50 })
  appleuser: string | null;

  @Column("tinyint", { name: "liberapaypal", width: 1, default: () => "'0'" })
  liberapaypal: boolean;

  @Column("date", { name: "multa", nullable: true })
  multa: string | null;

  @Column("date", { name: "dias_extras", nullable: true })
  diasExtras: string | null;

  @Column("varchar", { name: "token", nullable: true, length: 200 })
  token: string | null;

  @Column("datetime", { name: "ultimo_login", nullable: true })
  ultimoLogin: Date | null;

  @Column("varchar", { name: "chave_cripto", nullable: true, length: 255 })
  chaveCripto: string | null;

  @Column("varchar", { name: "iv_cripto", nullable: true, length: 255 })
  ivCripto: string | null;

  @Column("tinyint", { name: "avisos", width: 1, default: () => "'0'" })
  avisos: boolean;

  @Column("int", { name: "erros", default: () => "'0'" })
  erros: number;

  @OneToMany(
    () => BrindesClientes,
    (brindesClientes) => brindesClientes.cliente2
  )
  brindesClientes: BrindesClientes[];

  @OneToMany(
    () => ComprasAssistidasPedidos,
    (comprasAssistidasPedidos) => comprasAssistidasPedidos.cliente2
  )
  comprasAssistidasPedidos: ComprasAssistidasPedidos[];

  @OneToMany(
    () => EnderecosClientes,
    (enderecosClientes) => enderecosClientes.cliente2
  )
  enderecosClientes: EnderecosClientes[];

  @OneToMany(() => Envios, (envios) => envios.cliente2)
  envios: Envios[];

  @OneToMany(() => PedidosPrime, (pedidosPrime) => pedidosPrime.cliente2)
  pedidosPrimes: PedidosPrime[];

  @OneToMany(() => Pickup, (pickup) => pickup.cliente2)
  pickups: Pickup[];

  @OneToMany(() => SuiteCaixas, (suiteCaixas) => suiteCaixas.cliente2)
  suiteCaixas: SuiteCaixas[];

  @OneToMany(() => SuiteProdutos, (suiteProdutos) => suiteProdutos.suite2)
  suiteProdutos: SuiteProdutos[];
}
