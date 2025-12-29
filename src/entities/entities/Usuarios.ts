import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("usuarios", { schema: "ajuste_getfretes_db" })
export class Usuarios {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "nome", length: 50 })
  nome: string;

  @Column("varchar", { name: "senha", nullable: true, length: 32 })
  senha: string | null;

  @Column("tinyint", { name: "status", nullable: true, width: 1 })
  status: boolean | null;

  @Column("varchar", { name: "e_mail", nullable: true, length: 55 })
  eMail: string | null;

  @Column("tinyint", { name: "perfil", width: 1 })
  perfil: boolean;

  @Column("timestamp", {
    name: "data_hora_add",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  dataHoraAdd: Date | null;

  @Column("int", { name: "usuario", nullable: true })
  usuario: number | null;
}
