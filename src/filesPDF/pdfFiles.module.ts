import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PdfFilesController } from './controller/pdfFiles.controller';
import { PdfFilesService } from './services/pdfFiles.service';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [PdfFilesController],
  providers: [PdfFilesService],
})
export class FilesPdfModule {}
