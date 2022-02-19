//necessary dependencies
import express from 'express';
import path from 'path';
import sharp from 'sharp';
import nodeCache from 'node-cache';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

//needed globals
const cache: nodeCache = new nodeCache();
const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = dirname(__filename);

const resizingProcess = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    //resizing the image provided using the sharp package and saving the resized image in the images/thumb directory
    const resize = async (imgName: string, imgWidth: number, imgHeight: number): Promise<void> => {
        try {
            //checking first if we have the same requested resized image with the same sizes
            const requestedImg: string = req.originalUrl;
            if ((cache.has('resizedImg') as boolean) && (cache.get('resizedImg') as string) === requestedImg) {
                res.render('already-resized', { info: 'image is already resized.', imgWidth, imgHeight, imgName });
                //in case we dont have the same requested resized image, generate a new one
            } else {
                await sharp(path.join(__dirname, `../../puplic/images/full/${imgName}.jpg`))
                    .resize(imgWidth, imgHeight)
                    .toFormat('png')
                    .toFile(
                        path.join(__dirname, `../../puplic/images/thumb/${imgName}-${imgWidth}-${imgHeight}-thumb.png`)
                    )
                    .then((): void => {
                        res.render('display', { imgName, imgWidth, imgHeight });
                        res.end();
                    });
                cache.set('resizedImg', requestedImg);
            }
        } catch (err: unknown) {
            res.render('error', { err });
            console.log(err);
        }
    };
    resize(res.locals.img, res.locals.width, res.locals.height);
};

export default resizingProcess;
