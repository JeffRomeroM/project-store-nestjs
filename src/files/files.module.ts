import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilesController } from './controller/files.controller';
import { FilesService } from './services/files.service';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [FilesController],
  providers: [FilesService],
})
export class FilesModule {}
