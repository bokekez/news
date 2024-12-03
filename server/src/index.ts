import express from 'express';
import router from './routes/routes';
import sequelize from './database/connection';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

sequelize.authenticate()
  .then(() => {
    console.log('Database connected successfully');
    app.listen(process.env.DB_PORT || 5432, () => console.log('Server is running'));
  })
  .catch((error) => console.error('Database connection failed:', error));
