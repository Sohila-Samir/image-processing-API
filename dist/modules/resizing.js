import path from 'path';
import sharp from 'sharp';
import nodeCache from 'node-cache';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
//needed globals
const cache = new nodeCache();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const resizingProcess = (req, res, next) => {
    //resizing the image provided using the sharp package and saving the resized image in the images/thumb directory
    const resize = async (imgName, imgWidth, imgHeight) => {
        try {
            //checking first if we have the same requested resized image with the same sizes
            const requestedImg = req.originalUrl;
            if (cache.has('resizedImg') && cache.get('resizedImg') === requestedImg) {
                res.render('already-resized', { info: 'image is already resized.', imgWidth, imgHeight, imgName });
                //in case we dont have the same requested resized image, generate a new one
            }
            else {
                await sharp(path.join(__dirname, `../../puplic/images/full/${imgName}.jpg`))
                    .resize(imgWidth, imgHeight)
                    .toFormat('png')
                    .toFile(path.join(__dirname, `../../puplic/images/thumb/${imgName}-${imgWidth}-${imgHeight}-thumb.png`))
                    .then(() => {
                    res.render('display', { imgName, imgWidth, imgHeight });
                    res.end();
                });
                cache.set('resizedImg', requestedImg);
            }
        }
        catch (err) {
            res.render('error', { err });
            console.log(err);
        }
    };
    resize(res.locals.img, res.locals.width, res.locals.height);
};
export default resizingProcess;
