import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("ip", ["ip", "indicado"], { unique: true })
@Index("fk_pubid", ["indicado"], {})
@Index("ip_2", ["ip"], {})
@Entity("links_publicidade_navagacao", { schema: "ajuste_getfretes_db" })
export class LinksPublicidadeNavagacao {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "ip", length: 40 })
  ip: string;

  @Column("int", { name: "indicado" })
  indicado: number;

  @Column("text", { name: "json", nullable: true })
  json: string | null;

  @Column("timestamp", {
    name: "data_hora",
    default: () => "CURRENT_TIMESTAMP",
  })
  dataHora: Date;
}
