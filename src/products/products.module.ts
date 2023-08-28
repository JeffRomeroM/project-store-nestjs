import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductController } from './controllers/products.controller';
import { ProductsService } from './services/products.service';
import { ProductImage } from './entities/product-image.entity';
import { Category } from './entities/category.entity';
import { CategoryService } from './services/category.service';
import { CategoryController } from './controllers/categories.controller';
import { ProveedorController } from './controllers/proveedores.controller';
import { ProveedoresService } from './services/proveedores.service';
import { Proveedor } from './entities/proveedor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductImage, Category, Proveedor])],
  controllers: [ProductController, CategoryController, ProveedorController],
  providers: [ProductsService, CategoryService, ProveedoresService],
})
export class ProductsModule {}
