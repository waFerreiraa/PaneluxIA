import espress from "express";
import receitasRoutes from './src/routes/receitas.js'
import cors from 'cors'
 
const app = espress();
const port = 3001;

app.use(cors())

app.use(espress.json());

app.use('/api/receitas', receitasRoutes)

app.listen(port, () => {
  console.log(`servidor rodando na porta ${port}`);
});