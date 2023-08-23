import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Modelo } from '../entities/modelo.entity';
import { CreateModeloDto } from '../dto/modelo.dto';

@Injectable()
export class ModelosService{
    constructor(
        @InjectRepository(Modelo)
        private modeloRepo: Repository<Modelo>
    ){}

    async create(createModeloDto:CreateModeloDto){
        const modelo = this.modeloRepo.create(createModeloDto);
        await  this.modeloRepo.save(modelo);
        return modelo;
    }

    //mostrar un modelo mediante el id y mostrar los datos de marca y usuario
    findOne(id: number){
         return this.modeloRepo.findOne({
             where: {id},
             relations: {
                marca: true,
                autor: true,
             }
        
         });
    }
    //mostrar todas los modelos
    findAll(){
        return   this.modeloRepo.find({
            order: {id: 'ASC'},
        });
    }

    //eliminar un modelo
    async remove(id:number){
        const modelo =await this.findOne(id);
        await this.modeloRepo.remove(modelo);
        return 'Modelo eliminado';
    }

    //actualizar un modelo
    async update(id: number, cambios: CreateModeloDto){
        const oldModelo = await this.findOne(id);
        const updateModelo = await this.modeloRepo.merge(oldModelo, cambios);
        return this.modeloRepo.save(updateModelo);
    }
}