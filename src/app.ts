import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/global-error-handler';
import notFoundHandler from './app/middlewares/not-found-handler';
import router from './app/routes';

const app: Application = express();
app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  }),
);

app.use('/api', router);

app.get('/', async (req: Request, res: Response) => {
  const test = 'Welcome to the Rahat - portfolio server';
  res.send(test);
});

app.use(globalErrorHandler);
app.use(notFoundHandler);

export default app;
