import { Injectable } from '@nestjs/common';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';

@Injectable()
export class MarcasService {
  create(createMarcaDto: CreateMarcaDto) {
    return 'This action adds a new marca';
  }

  findAll() {
    return `Esta accion me retorna todas las marcas`;
  }

  findOne(id: number) {
    return `Esta accion retorna la marca #${id}`;
  }

  update(id: number, updateMarcaDto: UpdateMarcaDto) {
    return `Esta accion actualiza la marca #${id}`;
  }

  remove(id: number) {
    return `Esta accion alimina la marca #${id}`;
  }
}
