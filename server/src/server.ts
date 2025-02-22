import dotenv from 'dotenv';
import app from './app';
import connectDB from './db/database.connection';

dotenv.config();

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);

  connectDB();
});

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
});
