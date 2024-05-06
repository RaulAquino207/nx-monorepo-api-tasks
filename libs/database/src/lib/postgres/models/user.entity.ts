import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsString, Matches } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true, nullable: false })
  @IsEmail()
  email: string;

  @Column()
  password: string;

  @Column({ unique: true, nullable: true })
  hashedRefreshToken: string | null;
}
