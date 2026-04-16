import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserDiagram } from '../user-diagram/user-diagram.entity';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'google_id', nullable: true, unique: true })
  googleId: string | null;

  @Column({ nullable: true })
  email: string | null;

  @Column({ name: 'display_name', nullable: true })
  displayName: string | null;

  @Column({ name: 'device_token', nullable: true, unique: true })
  deviceToken: string | null;

  @Column({ name: 'is_anonymous', default: true })
  isAnonymous: boolean;

  @OneToMany(() => UserDiagram, (userDiagram) => userDiagram.user)
  userDiagrams: UserDiagram[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
