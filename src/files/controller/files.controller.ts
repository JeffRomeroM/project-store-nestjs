import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FilesService } from '../services/files.service';
import { FileInterceptor } from '@nestjs/platform-express';


@Controller('files')
export class FilesController{
    constructor(private readonly filesService: FilesService){}

   
    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        console.log(file);
        return  'holarfghjkml'
    }

    @Get('product/:imageId')
    getImage(){
        console.log("get image")
    }

}