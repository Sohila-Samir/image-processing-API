import express from 'express';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { promises as fs } from 'fs';
import resizing from '../modules/resizing.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const router = express.Router();
router.get('/api/:filename/:width/:height', (req, res, next) => {
    //destructring the data from the user
    const { filename, width, height } = req.params;
    //validating the user options
    const finalFileName = filename.toString();
    const finalWidth = parseInt(width);
    const finalheight = parseInt(height);
    //sending variables to other middleware
    res.locals.img = finalFileName;
    res.locals.width = finalWidth;
    res.locals.height = finalheight;
    next();
}, (req, res, next) => {
    //checking if we have the thumb directory and if not, create it first
    const thumbDirPath = path.join(__dirname, '../../puplic/images/thumb');
    (async () => {
        try {
            (await fs.readdir(thumbDirPath));
        }
        catch (err) {
            (await fs.mkdir(thumbDirPath));
        }
    })();
    next();
}, resizing);
export default router;
