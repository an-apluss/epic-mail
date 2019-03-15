import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';
import userRoute from './v1/routes/userRoute';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1/auth', userRoute);

app.get('/', (request, response) => {
  response.status(200).json({ data: 'Hello World' });
});


const { PORT } = process.env;


app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });

export default app;
