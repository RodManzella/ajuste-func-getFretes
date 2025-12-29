import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("id", ["id"], {})
@Entity("site", { schema: "ajuste_getfretes_db" })
export class Site {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("text", { name: "home", nullable: true })
  home: string | null;

  @Column("text", { name: "quem_somos", nullable: true })
  quemSomos: string | null;

  @Column("text", { name: "como_funciona", nullable: true })
  comoFunciona: string | null;

  @Column("text", { name: "servicos_precos", nullable: true })
  servicosPrecos: string | null;

  @Column("text", { name: "fretes_prazos", nullable: true })
  fretesPrazos: string | null;

  @Column("text", { name: "termos_condicoes", nullable: true })
  termosCondicoes: string | null;

  @Column("float", { name: "envio1", nullable: true, precision: 12 })
  envio1: number | null;

  @Column("float", { name: "envio2", nullable: true, precision: 12 })
  envio2: number | null;

  @Column("float", { name: "envio3", nullable: true, precision: 12 })
  envio3: number | null;

  @Column("varchar", { name: "promocao", nullable: true, length: 400 })
  promocao: string | null;
}
