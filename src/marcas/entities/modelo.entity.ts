import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Marca } from './marca.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Modelo {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id?: number;

  @PrimaryGeneratedColumn({ type: 'int4' })
  marca_id?: number;

  @Column({ type: 'varchar', length: 60, nullable: false })
  nombre: string;

  @Column({ type: 'int8', nullable: false })
  user_id: number;

  // //relaciones
  @ManyToOne(()=> Marca)
  @JoinColumn({
   name: 'marca_id', //el campo que relaciona a la tabla marca
   referencedColumnName: 'id' //este es el id de la marca

  })
  marca: Marca;

  @ManyToOne(()=> User)
  @JoinColumn({
    name: 'user_id', //el campo que relaciona a la tabla usuario
    referencedColumnName: 'id' //este es el id del usuario

  })
  autor: User;


}
