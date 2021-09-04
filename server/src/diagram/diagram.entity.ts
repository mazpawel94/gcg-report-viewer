import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BaseEntity,
} from 'typeorm';

@Entity()
export class Diagram extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  indexMove: number;

  @Column({
    type: 'text',
  })
  words: string;

  @CreateDateColumn({ nullable: true })
  createdAt: Date;
}
