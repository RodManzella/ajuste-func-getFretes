import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("nome", ["nome"], { unique: true })
@Index("id", ["id"], {})
@Entity("links_publicidade", { schema: "ajuste_getfretes_db" })
export class LinksPublicidade {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nome", unique: true, length: 55 })
  nome: string;

  @Column("varchar", { name: "descricao", nullable: true, length: 255 })
  descricao: string | null;

  @Column("varchar", { name: "url", length: 255 })
  url: string;

  @Column("int", { name: "usuario", nullable: true })
  usuario: number | null;

  @Column("timestamp", {
    name: "data_hora_add",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  dataHoraAdd: Date | null;

  @Column("tinyint", { name: "status", width: 1, default: () => "'1'" })
  status: boolean;
}
