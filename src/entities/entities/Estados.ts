import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("id", ["id"], {})
@Entity("estados", { schema: "ajuste_getfretes_db" })
export class Estados {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nome", nullable: true, length: 20 })
  nome: string | null;

  @Column("char", { name: "codigo", nullable: true, length: 2 })
  codigo: string | null;
}
