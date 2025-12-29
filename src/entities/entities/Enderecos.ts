import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("id", ["id"], {})
@Entity("enderecos", { schema: "ajuste_getfretes_db" })
export class Enderecos {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "cep", nullable: true, length: 10 })
  cep: string | null;

  @Column("varchar", { name: "logradouro", nullable: true, length: 99 })
  logradouro: string | null;

  @Column("varchar", { name: "numero", nullable: true, length: 10 })
  numero: string | null;

  @Column("varchar", { name: "bairro", nullable: true, length: 70 })
  bairro: string | null;

  @Column("varchar", { name: "cidade", nullable: true, length: 80 })
  cidade: string | null;

  @Column("varchar", { name: "pais", nullable: true, length: 49 })
  pais: string | null;

  @Column("varchar", { name: "uf", nullable: true, length: 50 })
  uf: string | null;

  @Column("varchar", { name: "nome", nullable: true, length: 55 })
  nome: string | null;

  @Column("datetime", { name: "data_hora_add", nullable: true })
  dataHoraAdd: Date | null;

  @Column("varchar", { name: "telefone", nullable: true, length: 20 })
  telefone: string | null;

  @Column("int", { name: "usuario", nullable: true })
  usuario: number | null;
}
