import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  RelationId
} from 'typeorm';

@Entity('user', { schema: 'demo' })
@Index('username_UNIQUE', ['username'], { unique: true })
export class user {
  @Column('varchar', {
    nullable: false,
    primary: true,
    length: 20,
    name: 'id'
  })
  id: string;

  @Column('varchar', {
    nullable: false,
    length: 45,
    name: 'name'
  })
  name: string;

  @Column('varchar', {
    nullable: false,
    unique: true,
    length: 20,
    name: 'username'
  })
  username: string;

  @Column('varchar', {
    nullable: false,
    length: 45,
    name: 'psw'
  })
  psw: string;

  @Column('tinyint', {
    nullable: false,
    width: 1,
    name: 'gender'
  })
  gender: boolean;

  @Column('varchar', {
    nullable: true,
    length: 45,
    name: 'address'
  })
  address: string | null;

  @Column('varchar', {
    nullable: false,
    length: 15,
    name: 'phone'
  })
  phone: string;

  @Column('varchar', {
    nullable: true,
    length: 20,
    name: 'email'
  })
  email: string | null;

  @Column('timestamp', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'modified_time'
  })
  modified_time: Date;

  @Column('timestamp', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created_time'
  })
  created_time: Date;
}
