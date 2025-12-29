import { Column, Entity, Index } from "typeorm";

@Index("ci_sessions_timestamp", ["timestamp"], {})
@Entity("ci_sessions", { schema: "ajuste_getfretes_db" })
export class CiSessions {
  @Column("varchar", { primary: true, name: "id", length: 128 })
  id: string;

  @Column("varchar", { primary: true, name: "ip_address", length: 45 })
  ipAddress: string;

  @Column("int", { name: "timestamp", unsigned: true, default: () => "'0'" })
  timestamp: number;

  @Column("blob", { name: "data" })
  data: Buffer;
}
