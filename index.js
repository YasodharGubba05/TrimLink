import express from 'express'
const app=express();
const PORT=process.env.PORT ?? 8000;
import userRouter from './routes/user.routes.js'
app.use(express.json());


app.get("/",(req,res)=>{
    return res.json({status:'server is up and running'});
})

app.use('/user',userRouter)

app.listen(PORT,()=>{
console.log('Server is running on port 8000');
})