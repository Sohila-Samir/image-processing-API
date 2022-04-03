//importing necessary dependencies for the project
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

//routes modules
import imageProcessing from './routes/image-processing.js'; //image-processing route
import mainRoute from './routes/home.js'; //home/main route
import { Server } from 'http';
import 'dotenv/config';

//globals
const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = dirname(__filename);

//setting up the server
const app: express.Application = express();
const port = process.env.PORT || 2021;

//setting up ejs and serving the views directory
app.set('views', path.join(__dirname, '../puplic/views') as string) as unknown;
app.set('view engine', 'ejs') as unknown;

//initializing server port
app.listen(port, (): void => {
    console.log(`listening on port ${port}`);
}) as Server;

/*--------------------------------------------------------------------------------------------------end of setup*/

//using routes
app.use(imageProcessing);
app.use(mainRoute);

export default app;
