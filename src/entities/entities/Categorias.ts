import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("id", ["id"], {})
@Entity("categorias", { schema: "ajuste_getfretes_db" })
export class Categorias {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nome", length: 55 })
  nome: string;

  @Column("varchar", { name: "nome_en", length: 55 })
  nomeEn: string;

  @Column("varchar", { name: "nome_es", length: 55 })
  nomeEs: string;

  @Column("int", { name: "usuario", nullable: true })
  usuario: number | null;

  @Column("timestamp", {
    name: "data_hora_add",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  dataHoraAdd: Date | null;
}
