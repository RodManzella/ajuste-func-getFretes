import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("id", ["id"], {})
@Index("data_criacao", ["dataCriacao"], {})
@Index("usuario", ["usuario"], {})
@Entity("bags", { schema: "ajuste_getfretes_db" })
export class Bags {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("timestamp", {
    name: "data_criacao",
    default: () => "CURRENT_TIMESTAMP",
  })
  dataCriacao: Date;

  @Column("int", { name: "usuario" })
  usuario: number;

  @Column("tinyint", { name: "status" })
  status: number;

  @Column("decimal", { name: "peso", precision: 10, scale: 2 })
  peso: string;

  @Column("int", { name: "tipo" })
  tipo: number;

  @Column("varchar", { name: "bag_id", nullable: true, length: 30 })
  bagId: string | null;

  @Column("varchar", {
    name: "provider_bag_number",
    nullable: true,
    length: 255,
  })
  providerBagNumber: string | null;

  @Column("int", { name: "manifest_id", nullable: true })
  manifestId: number | null;

  @Column("decimal", { name: "largura", precision: 10, scale: 2 })
  largura: string;

  @Column("decimal", { name: "altura", precision: 10, scale: 2 })
  altura: string;

  @Column("decimal", { name: "comprimento", precision: 10, scale: 2 })
  comprimento: string;

  @Column("varchar", { name: "zona", nullable: true, length: 5 })
  zona: string | null;

  @Column("varchar", { name: "tag", nullable: true, length: 15 })
  tag: string | null;

  @Column("int", { name: "dispatch", nullable: true })
  dispatch: number | null;
}
