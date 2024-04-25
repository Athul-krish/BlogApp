const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
PORT = 3008;
require('./DB/connection')
const userRoute = require('./Routes/userRoutes');
const postRoutes= require('./Routes/postRoutes');
const app = express();


app.use(morgan('dev'));
app.use(cors());

app.use('/api',userRoute)
app.use('/api',postRoutes)


app.listen(PORT,()=>{
    console.log(`Listenting to ${PORT}`)
})
