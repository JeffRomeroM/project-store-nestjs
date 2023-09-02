import {v4 as id} from 'uuid';

export const fileNamer = (
    req: Express.Request,
    file: Express.Multer.File,
    callback
    ) => {
        if(!file) return callback(new Error('Archivo vacío'), false);
    
        const fileExtension = file.mimetype.split('/')[1];

        //creo una interpolacion, uniendo uuid con la extension del archivo
        const fileNamer = `${id()}.${fileExtension}`;

        // retornar el nombre del archivo
        callback(null, fileNamer);
    }
