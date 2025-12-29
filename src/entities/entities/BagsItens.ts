import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("bag", ["bag"], {})
@Index("label", ["label"], {})
@Entity("bags_itens", { schema: "ajuste_getfretes_db" })
export class BagsItens {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "bag" })
  bag: number;

  @Column("varchar", { name: "label", length: 40 })
  label: string;

  @Column("decimal", { name: "peso", precision: 10, scale: 2 })
  peso: string;

  @Column("varchar", { name: "status", nullable: true, length: 400 })
  status: string | null;
}
