import { BadRequestException, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { fileNamer } from 'src/helpers/fileNamer.helper';
import { pdfFilter } from 'src/helpers/pdfFilter.helper';
import { PdfFilesService } from '../services/pdfFiles.service';


@Controller('files-pdf')
export class PdfFilesController{
    constructor(private readonly filesService: PdfFilesService){}
   
    @Post('upload')
    @UseInterceptors(FileInterceptor('file', {
        //llamamos al fileFilter de Multer y le asignamos nuestro helper
        fileFilter: pdfFilter,

        storage: diskStorage({
            destination: './static/pdf',
            filename: fileNamer,
        }),

    }),
    )

    uploadFile(@UploadedFile() file: Express.Multer.File) {
        if(!file){
            throw new BadRequestException('Asegurese que el archivo es un pdf');
        }

        return {
            fileName: file.filename,
        }
    }


}   