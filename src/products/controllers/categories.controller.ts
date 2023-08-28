import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { CategoryService } from "../services/category.service";
import { CreateCategoryDto } from "../dto/category.dto";

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryServices: CategoryService) {}

  @Post()
  async create(@Body() categoryDto: CreateCategoryDto) {
    return await this.categoryServices.create(categoryDto);
  }

  @Get()
  findAll() {
    return this.categoryServices.findAll();

  }

  @Get(':id')
  finOne(@Param('id', ParseIntPipe) id: number){
    return this.categoryServices.finOne(id);

  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.categoryServices.remove(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() createCategoryDto: CreateCategoryDto,
  ) {
    return this.categoryServices.update(id, createCategoryDto);
  }
  
}
