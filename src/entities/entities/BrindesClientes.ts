import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Brindes } from "./Brindes";
import { Clientes } from "./Clientes";
import { Envios } from "./Envios";

@Index("cliente_2", ["cliente", "brinde"], { unique: true })
@Index("cliente", ["cliente"], {})
@Index("brinde", ["brinde"], {})
@Index("envio", ["envio"], {})
@Entity("brindes_clientes", { schema: "ajuste_getfretes_db" })
export class BrindesClientes {
  @Column("int", { name: "cliente" })
  cliente: number;

  @Column("int", { name: "brinde" })
  brinde: number;

  @Column("int", { name: "envio" })
  envio: number;

  @ManyToOne(() => Brindes, (brindes) => brindes.brindesClientes, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "brinde", referencedColumnName: "id" }])
  brinde2: Brindes;

  @ManyToOne(() => Clientes, (clientes) => clientes.brindesClientes, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "cliente", referencedColumnName: "id" }])
  cliente2: Clientes;

  @ManyToOne(() => Envios, (envios) => envios.brindesClientes, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "envio", referencedColumnName: "id" }])
  envio2: Envios;
}
