import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BaseEntity, ManyToMany } from 'typeorm';
import { Diagram } from '../diagram/diagram.entity';

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
