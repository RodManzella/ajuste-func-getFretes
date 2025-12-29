import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("valor", ["valor", "tipo"], { unique: true })
@Entity("black_list", { schema: "ajuste_getfretes_db" })
export class BlackList {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "valor", length: 255 })
  valor: string;

  @Column("enum", {
    name: "tipo",
    enum: ["EMAIL", "SUITE", "CPF", "CEP", "LOGRADOURO", "NOME", "SENHA", "IP"],
  })
  tipo:
    | "EMAIL"
    | "SUITE"
    | "CPF"
    | "CEP"
    | "LOGRADOURO"
    | "NOME"
    | "SENHA"
    | "IP";

  @Column("int", { name: "qtde" })
  qtde: number;
}
