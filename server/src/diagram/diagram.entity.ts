import { Tag } from 'src/tag/tag.entity';
import { BaseEntity, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Diagram extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ default: true })
  isPublic: boolean;

  @Column({
    type: 'text',
  })
  letters: string;

  @Column({
    type: 'text',
  })
  words: string;

  @Column({
    type: 'text',
  })
  solution: string;

  @CreateDateColumn({ nullable: true })
  createdAt: Date;

  @ManyToMany((type) => Tag, (entity) => entity.diagrams)
  @JoinTable()
  tags: Tag[];
}
