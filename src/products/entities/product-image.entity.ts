import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class ProductImage{
    @PrimaryGeneratedColumn({type: 'int4'})
    id: number;

    @Column({ type: 'varchar',  nullable: true })
    url: string;
}