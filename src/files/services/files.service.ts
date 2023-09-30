import { BadRequestException, Injectable } from '@nestjs/common';
import { existsSync } from 'fs';
import { join } from 'path';


@Injectable()
export class FilesService{
    constructor(){}

    getStaticImageName(imageName: string){
        //Ruta para encontrar el archivo
        const path = join(__dirname, '../../../static/products', imageName);

        //si no existe la imagen al buscarla en la ruta entonces:
        if(!existsSync(path)) {
            throw new BadRequestException(`No existe un documento con la imagen ${imageName}`,
            );
        }

        //si existe la imagen la retorna
        return path;
    }
}