import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  Unique,
  BaseEntity,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Diagram } from '../diagram/diagram.entity';

@Entity('user_diagram')
@Unique(['userId', 'diagramId']) // ← gwarantuje, że jeden user ma tylko jeden rekord na diagram
export class UserDiagram extends BaseEntity {
  @PrimaryGeneratedColumn('uuid') // lub 'increment' – jak wolisz
  id: string;

  @ManyToOne(() => User, (user) => user.userDiagrams, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;
  @Column()
  userId: string;

  @ManyToOne(() => Diagram, (diagram) => diagram.userDiagrams, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'diagramId' })
  diagram: Diagram;
  @Column()
  diagramId: number;

  @Column({ type: 'int', default: 0 })
  attempts: number;

  @Column({ type: 'int', default: 0 })
  usedHints: number;

  @Column({ type: 'boolean' })
  correctlySolved: boolean;

  @CreateDateColumn({ type: 'timestamp' }) // automatycznie ustawia datę utworzenia
  createdAt: Date;
}
