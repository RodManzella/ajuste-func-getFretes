import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("tipo", ["tipo"], {})
@Index("id", ["id"], {})
@Index("data_hora_add", ["dataHoraAdd"], {})
@Index("usuario", ["usuario"], {})
@Entity("alertas", { schema: "ajuste_getfretes_db" })
export class Alertas {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("tinyint", { name: "tipo", width: 1 })
  tipo: boolean;

  @Column("varchar", { name: "titulo", length: 200 })
  titulo: string;

  @Column("text", { name: "descricao" })
  descricao: string;

  @Column("timestamp", {
    name: "data_hora_add",
    default: () => "CURRENT_TIMESTAMP",
  })
  dataHoraAdd: Date;

  @Column("int", { name: "usuario" })
  usuario: number;

  @Column("tinyint", { name: "fixar", width: 1, default: () => "'0'" })
  fixar: boolean;
}
