import { Body, Controller, Post } from "@nestjs/common";
import { ProductsService } from "../services/products.service";
import { CreateProductDto } from "../dto/product.dto";

@Controller('products')
export class ProductController
{
    constructor(private readonly productService:ProductsService){}
    @Post()
    async CreateProduct(@Body() createProductDto: CreateProductDto){
        return this.productService.create(createProductDto);
    }
}