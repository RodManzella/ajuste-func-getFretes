import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("ix_id_payment_intentstatus", ["idPaymentIntent", "status"], {
  unique: true,
})
@Entity("stripe_event", { schema: "ajuste_getfretes_db" })
export class StripeEvent {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id_stripe_event",
    unsigned: true,
  })
  idStripeEvent: number;

  @Column("varchar", { name: "id_payment_intent", length: 40 })
  idPaymentIntent: string;

  @Column("varchar", { name: "status", length: 30 })
  status: string;

  @Column("datetime", { name: "date_add" })
  dateAdd: Date;

  @Column("tinyint", { name: "is_processed", unsigned: true })
  isProcessed: number;

  @Column("varchar", { name: "flow_type", length: 30 })
  flowType: string;

  @Column("varchar", { name: "link", nullable: true, length: 255 })
  link: string | null;
}
