import { Module } from '@nestjs/common';
import { MarcasService } from './services/marcas.service';
import { MarcaController } from './controllers/marcas.controller';
import { Marca } from './entities/marca.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Marca])],
  controllers: [MarcaController],
  providers: [MarcasService]
})
export class MarcasModule {}

