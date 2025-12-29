import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("grupos_produtos", { schema: "ajuste_getfretes_db" })
export class GruposProdutos {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "codigo", length: 20 })
  codigo: string;

  @Column("int", { name: "hs" })
  hs: number;

  @Column("varchar", { name: "titulo", length: 50 })
  titulo: string;
}
