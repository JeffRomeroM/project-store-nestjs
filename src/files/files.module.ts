import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilesService } from './services/files.service';
import { FilesController } from './controller/files.controller';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [FilesController],
  providers: [FilesService],
})
export class FilesModule {}
