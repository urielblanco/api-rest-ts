import express, { Application } from 'express';
import cors from 'cors';
import compression from 'compression';
import cookieParser from 'cookie-parser';

const app: Application = express();

app.use(
  cors({
    credentials: true
  })
);

app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_, res) => {
  res.json({ message: 'Hello from express!' });
});

export default app;
