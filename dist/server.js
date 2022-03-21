//importing necessary dependencies for the project
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
//routes modules
import imageProcessing from './routes/image-processing.js'; //image-processing route
import mainRoute from './routes/home.js'; //home/main route
//globals
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//setting up the server
const app = express();
const port = process.env.PORT || 2021;
//setting up ejs and serving the views directory
app.set('views', path.join(__dirname, '../puplic/views'));
app.set('view engine', 'ejs');
//initializing server port
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
/*--------------------------------------------------------------------------------------------------end of setup*/
//using routes
app.use(imageProcessing);
app.use(mainRoute);
export default app;
