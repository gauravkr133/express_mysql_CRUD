const express = require('express');
const dotenv  = require('dotenv');
const cors    = require('cors');
const HttpException = require('./utils/HttpException.utils');
const userRouter = require('./routes/user.routes');
const errorMiddleware = require('./middleware/error.middleware');


//Init Express
const app = express();
//Init Environment
dotenv.config();
//parse requests of content-type: application/json
//parse incoming requests with JSON payloads
app.use(express.json());
//enabling cors for all requests by using middleware
app.use(cors());
//Enable pre-flight
app.options("*",cors());

const port = Number(process.env.PORT || 3000);

app.use('/api/v1/users',userRouter);

app.all('*',(req,res,next)=>{
    const err = new HttpException(404,'Endpoint not found');
    next(err);
});

app.use(errorMiddleware);

app.listen(port,()=>{
    console.log(`Server up and running on port ${port}`);
});





