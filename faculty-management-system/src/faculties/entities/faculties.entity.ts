import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('faculties')
export class Faculties {
  @PrimaryColumn({
    type: 'varchar',
    length: 14,
  })
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
