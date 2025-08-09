import mongoose from 'mongoose';
import app from './app';
import config from './config';

const startServer = async () => {
  try {
    await mongoose.connect(config.database_uri!);
    console.log('MongoDB Connected');

    const port = config.port || 5000;
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to connect to DB', error);
    process.exit(1);
  }
};

startServer();
