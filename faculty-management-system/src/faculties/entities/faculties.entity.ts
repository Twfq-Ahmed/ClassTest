import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('faculties')
export class Faculties {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  expertise: string;

  @Column()
  noOfPublication: number;

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
