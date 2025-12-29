import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("id", ["id"], {})
@Entity("faq", { schema: "ajuste_getfretes_db" })
export class Faq {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "categoria" })
  categoria: number;

  @Column("text", { name: "pergunta_portugues", nullable: true })
  perguntaPortugues: string | null;

  @Column("text", { name: "resposta_portugues", nullable: true })
  respostaPortugues: string | null;

  @Column("text", { name: "pergunta_ingles", nullable: true })
  perguntaIngles: string | null;

  @Column("text", { name: "resposta_ingles", nullable: true })
  respostaIngles: string | null;

  @Column("text", { name: "pergunta_espanhol", nullable: true })
  perguntaEspanhol: string | null;

  @Column("text", { name: "resposta_espanhol", nullable: true })
  respostaEspanhol: string | null;

  @Column("int", { name: "usuario", nullable: true })
  usuario: number | null;

  @Column("timestamp", {
    name: "data_hora_add",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  dataHoraAdd: Date | null;
}
