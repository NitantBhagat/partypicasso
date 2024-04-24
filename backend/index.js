import express from 'express';
import { PORT, mongodbURL } from './config.js';
import mongoose from 'mongoose';
import userRoutes from './routes/UserRoutes.js';
import AdminRoutes from './routes/AdminRoutes.js';
import EventRoutes from './routes/EventRoutes.js';
const app=express();

app.use(express.json());

// Home Page
app.get('/', (request, response) => {
    return response.status(200).send('Welcome to the Server');
});

// User Routes
app.use('/user', userRoutes);

//Admin Routes
app.use('/admin', AdminRoutes);

//Event Routes
app.use('/events', EventRoutes);

app.listen(PORT, () => {
    console.log('Server Running');
});

mongoose
    .connect(mongodbURL)
    .then(()=>{
        console.log('Connected to database');
    })
    .catch(()=>{
        console.log('Error');
    });