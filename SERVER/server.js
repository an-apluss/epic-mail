import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';
import routes from './v1/routes/api';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.status(200).json({ data: 'Hello World' });
});

const { PORT } = process.env;


app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });

export default app;
