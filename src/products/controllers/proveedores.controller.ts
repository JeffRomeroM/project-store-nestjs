import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { CategoryService } from "../services/category.service";
import { CreateProveedorDto } from "../dto/proveedor.dto";
import { ProveedoresService } from "../services/proveedores.service";

@Controller('proveedores')
export class ProveedorController {
  constructor(private readonly proveedoresServices: ProveedoresService) {}

  @Post()
  async create(@Body() createProveedorDto: CreateProveedorDto) {
    return await this.proveedoresServices.create(createProveedorDto);
  }

  @Get()
  findAll() {
    return this.proveedoresServices.findAll();

  }

  @Get(':id')
  finOne(@Param('id', ParseIntPipe) id: number){
    return this.proveedoresServices.findOne(id);

  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.proveedoresServices.remove(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() createProveedorDto: CreateProveedorDto,
  ) {
    return this.proveedoresServices.update(id, createProveedorDto);
  }
  
}
