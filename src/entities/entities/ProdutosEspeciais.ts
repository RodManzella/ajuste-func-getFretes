import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("id", ["id"], {})
@Entity("produtos_especiais", { schema: "ajuste_getfretes_db" })
export class ProdutosEspeciais {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "titulo", length: 255 })
  titulo: string;

  @Column("decimal", { name: "valor", precision: 10, scale: 2 })
  valor: string;

  @Column("tinyint", { name: "status", width: 1 })
  status: boolean;
}
