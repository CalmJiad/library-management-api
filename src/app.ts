import cors from 'cors';
import express from 'express';
import bookRoute from './modules/book/book.route';
import borrowRoute from './modules/borrow/borrow.route';

const app = express();

app.use(express.json());
app.use(cors());

app.use(bookRoute);
app.use(borrowRoute);

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to the Library API',
  });
});

app.use((_req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

export default app;
