import { Controller, Post } from '@nestjs/common';
import { FilesService } from '../services/files.service';


@Controller('files')
export class FilesController{
    constructor(private readonly filesService: FilesService){}

    @Post('product')
    UploadImage(){
        return 'hola'
    }
}