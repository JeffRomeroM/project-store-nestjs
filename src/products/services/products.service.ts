import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../entities/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from '../dto/product.dto';
import { ProductImage } from '../entities/product-image.entity';
@Injectable()
export class ProductsService{
    constructor(
        @InjectRepository(Product)
        private productRepo: Repository<Product>,

        @InjectRepository(ProductImage)
        private readonly productImageRepo: Repository<ProductImage>
    ){}

    // async create(createProductDto:CreateProductDto){
    //     const product = this.productRepo.create(createProductDto);
    //     await  this.productRepo.save(product);
    //     return product;
    // }

    //Crear un producto y agregar imagenes
    async create(productDto: CreateProductDto){
        const { images = [], ...detailsProductds } = productDto;

        const product = await this.productRepo.create({
            ...detailsProductds,
            images: images.map((image) => this.productImageRepo.create({ url: image }),
            ),
        });
        await this.productRepo.save(product);
        return product;
    }

    
    //Encontrar un registro con relaciones
    findOne(id: number){
        return this.productRepo.findOne({
            where: {id},
            relations: {
                autor: true,
                categoria: true,
                proveedor: true
            }
        });
        
    }

    //mostrar todos los registros
    findAll(){
        return   this.productRepo.find({
            order: {id: 'ASC'},
            relations: {
                autor: true,
                categoria: true,
                proveedor: true
            },
        });
    }
    //eliminar un registro
    async remove(id:number){
        const product =await this.findOne(id);
        await this.productRepo.remove(product);
        return 'Producto eliminado';
    }

    //actualizar un registro
    // async update(id: number, cambios: CreateProductDto){
    //     const oldProduct = await this.findOne(id);
    //     const updateProduct = await this.productRepo.merge(oldProduct, cambios);
    //     return this.productRepo.save(updateProduct);
    // }

    //Actualizar un producto con imagenes
    async update(id: number, productDto: CreateProductDto){
        const product = await this.productRepo.preload({
            id: id,
            //Spread Operator(operador para esparcir)
            ...productDto,//Esparcir todos los datos del producto
            images: [],
        });

        await this.productRepo.save(product);
        return product;
    }
}