import { Diagram } from 'src/diagram/diagram.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BaseEntity, ManyToMany } from 'typeorm';

@Entity()
export class Tag extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @CreateDateColumn({ nullable: true })
  createdAt: Date;

  @ManyToMany((type) => Diagram, (entity) => entity.tags)
  diagrams: Diagram[];
}
