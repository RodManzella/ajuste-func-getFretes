import express, {Request, Response, NextFunction} from 'express';

const app = express();
app.use(express.json());

app.use((err: any, req:Request, res: Response, next: NextFunction) => {
  res.status(500).send('Erro');
})

app.get('/', (req, res) =>{
    res.status(200).json({
    status: "success",
    message: "Testing"
  })
})



export default app;