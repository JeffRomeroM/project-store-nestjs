import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./entities/product.entities";
import { Module } from "@nestjs/common";

@Module({
    imports: [TypeOrmModule.forFeature([
        Product
    ])],
    providers: [
        //... Providers here ...
    ],
    controllers: [
        //... Controllers Here ...
    ]
})
export class ProductsModule {}