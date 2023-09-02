import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilesPdfService } from './services/filesPdf.service';
import { FilesPdfController } from './controller/filesPDF.controller';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [FilesPdfController],
  providers: [FilesPdfService],
})
export class FilesPdfModule {}
