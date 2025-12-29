import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("usuario", ["usuario"], {})
@Index("data", ["data"], {})
@Entity("acessos_usuarios", { schema: "ajuste_getfretes_db" })
export class AcessosUsuarios {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "usuario" })
  usuario: number;

  @Column("timestamp", { name: "data", default: () => "CURRENT_TIMESTAMP" })
  data: Date;

  @Column("varchar", { name: "ip", length: 20 })
  ip: string;

  @Column("varchar", { name: "url", length: 400 })
  url: string;

  @Column("varchar", { name: "maquina", nullable: true, length: 40 })
  maquina: string | null;
}
