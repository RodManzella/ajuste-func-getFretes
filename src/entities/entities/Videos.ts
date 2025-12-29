import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("video", ["video"], { unique: true })
@Entity("videos", { schema: "ajuste_getfretes_db" })
export class Videos {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "image", length: 255 })
  image: string;

  @Column("varchar", { name: "title", length: 400 })
  title: string;

  @Column("varchar", { name: "video", unique: true, length: 40 })
  video: string;
}
