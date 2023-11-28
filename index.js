import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import studentsRoute from './routes/studentsRoute.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173/",
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome To Module-15 MERN Stack Student API');
});

app.use('/students', studentsRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
