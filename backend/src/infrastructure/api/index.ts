import bodyParser from 'body-parser';
import express from 'express';
import { serve, setup } from 'swagger-ui-express';
import swaggerDocument from '../../swagger/swagger.json';
import { RegisterRoutes } from '../routes/routes';
import config from './api.config';

const app = express();

app.use(bodyParser.json());

/* For swagger API documentation */
app.use('/api-docs', serve, setup(swaggerDocument));

RegisterRoutes(app);

const server = app.listen(config.port, () => {
  console.log(`🚀🚀 Listening at http://localhost:${config.port}`);
});

server.on('error', console.error);
