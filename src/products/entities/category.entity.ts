import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "src/users/entities/user.entity";

@Entity()
export class Category {

  @PrimaryGeneratedColumn({ type: 'int4' })
  id?: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  categoria: string;

 
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at:Date;
  
  @Column({ type: 'int4', nullable: false })
  user_id: number;
 
  @ManyToOne(()=> User)
  @JoinColumn({
    name: 'user_id', 
    referencedColumnName: 'id'
   })
   autor: User;
}