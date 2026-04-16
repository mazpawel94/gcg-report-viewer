import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Tag } from '../tag/tag.entity';
import { UserDiagram } from '../user-diagram/user-diagram.entity';

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

  @Column({ type: 'int', default: 0 })
  level: number;

  @CreateDateColumn({ nullable: true })
  createdAt: Date;

  @OneToMany(() => UserDiagram, (userDiagram) => userDiagram.diagram)
  userDiagrams: UserDiagram[];

  @ManyToMany((type) => Tag, (entity) => entity.diagrams)
  @JoinTable({ name: 'diagram_tag' })
  tags: Tag[];
}
