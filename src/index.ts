import express from 'express';

const app = express();

app.get('/', (_, res) => {
    res.json({ message: 'Hello from express!' });
});

app.listen(3000, () => console.log('Server running on port 3000'));
