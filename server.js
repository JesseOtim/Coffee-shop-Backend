import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();


const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });
const { PORT } = process.env;
const database_ip = process.env.IP;
const corsOptions = {
    origin: 'http://127.0.0.1:5503',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions));
app.use(express.json());

//Home route
app.get('/', (req, res) => {
    return res.status(200).send({
      status: 200,
      message: 'warming up at Port 5000'
    });
});

// wrong route
app.use((req, res) => res.status(405).send({
    'status': 405,
    'error': 'This URL does not exist'
}));

// server down
app.use((req, res) => res.status(500).send({
    'status': 500,
    'error': 'Oops! The problem is not on your side. Hang on, we will fix this soon'
}));


// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
// current process environment
app.listen(PORT || 3000,
    console.log(`App listening on port ${PORT}!`),
    database_ip
); 

export default app;

