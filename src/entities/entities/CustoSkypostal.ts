import { Column, Entity } from "typeorm";

@Entity("custo_skypostal", { schema: "ajuste_getfretes_db" })
export class CustoSkypostal {
  @Column("decimal", { name: "peso", precision: 4, scale: 2 })
  peso: string;

  @Column("decimal", { name: "custo", precision: 10, scale: 2 })
  custo: string;

  @Column("int", { name: "cod" })
  cod: number;
}
