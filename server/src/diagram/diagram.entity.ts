import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Tag } from '../tag/tag.entity';
import { UserDiagram } from '../user-diagram/user-diagram.entity';
import { User } from '../users/user.entity';

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

  @Column({ type: 'uuid', nullable: true })
  authorId: string | null;

  @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'authorId' })
  author: User | null;

  @CreateDateColumn({ nullable: true })
  createdAt: Date;

  @OneToMany(() => UserDiagram, (userDiagram) => userDiagram.diagram)
  userDiagrams: UserDiagram[];

  @ManyToMany((type) => Tag, (entity) => entity.diagrams)
  @JoinTable({ name: 'diagram_tag' })
  tags: Tag[];
}
