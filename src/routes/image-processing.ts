import express, { Router } from 'express';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { promises as fs } from 'fs';

import resizing from '../modules/resizing.js';
const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = dirname(__filename);

const router: Router = express.Router();

router.get(
    '/api/:filename/:width/:height',
    (req: express.Request, res: express.Response, next: express.NextFunction): void => {
        //destructring the data from the user
        const { filename, width, height } = req.params;

        //validating the user options
        const finalFileName: string = filename.toString();
        const finalWidth: number = parseInt(width);
        const finalheight: number = parseInt(height);

        //sending variables to other middleware
        (res.locals.img as string) = finalFileName;
        (res.locals.width as number) = finalWidth;
        (res.locals.height as number) = finalheight;

        next();
    },

    (req: express.Request, res: express.Response, next: express.NextFunction): void => {
        //checking if we have the thumb directory and if not, create it first
        const thumbDirPath: string = path.join(__dirname, '../../puplic/images/thumb');
        (async (): Promise<void> => {
            try {
                (await fs.readdir(thumbDirPath)) as string[];
            } catch (err: unknown) {
                (await fs.mkdir(thumbDirPath)) as void;
            }
        })();

        next();
    },

    resizing
) as Router;

export default router;
