import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../entities/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from '../dto/product.dto';
@Injectable()
export class ProductsService{
    constructor(
        @InjectRepository(Product)
        private productRepo: Repository<Product>
    ){}

    async create(createProductDto:CreateProductDto){
        const product = this.productRepo.create(createProductDto);
        await  this.productRepo.save(product);
        return product;
    }
}