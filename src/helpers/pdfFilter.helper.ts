
export const pdfFilter = (
    req: Express.Request,
    file: Express.Multer.File,
    callback,
    ) => {
    //si el archivo no existe o no viene entonces:
    if(!file) return callback(new Error('Archivo vacío'), false);
    
    //para llegar al mimetype y validar el tipo de imagen saltando con split para llegar a la extension
    const pdfExtension = file.mimetype.split('/')[1];
    
    //extensiones validas
    const validExtension = ['pdf'];
    
    //comprobamos que sea una extensión válida
    if(validExtension.includes(pdfExtension)){
        return callback(null, true);

    }
    
    callback(null, false);

};