import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Proveedor } from "../entities/proveedor.entity";
import { CreateProveedorDto } from "../dto/proveedor.dto";

@Injectable()
export class ProveedoresService {
  constructor(
    @InjectRepository(Proveedor)
    private readonly proveedorRepo: Repository<Proveedor>,
  ) {}

  //crear un proveedor
  async create(createProveedorDto: CreateProveedorDto) {
    const proveedor = this.proveedorRepo.create(createProveedorDto);
    await this.proveedorRepo.save(proveedor);
    return proveedor;
  }
  
  //Encontrar un proveedor con relaciones a user
   findOne(id: number) {
     return this.proveedorRepo.findOne({
       where:{ id },
       relations: {
         autor: true,
       },

     });
   }

  //mostrar todos los proveedores
  findAll(){
    return this.proveedorRepo.find({
      order: { id: 'ASC'},
    });
  }


//eliminar un proveedor
  async remove(id: number) {
  const proveedor = await this.findOne(id);
  await this.proveedorRepo.remove(proveedor);
  return ' Proveedor eliminado';
  }

  //actualizar un proveedor
  async update(id: number, cambios: CreateProveedorDto) {
    const oldProveedor = await this.findOne(id);
    const updateProveedor = await this.proveedorRepo.merge(oldProveedor, cambios);
    return this.proveedorRepo.save(updateProveedor);
  }
}
