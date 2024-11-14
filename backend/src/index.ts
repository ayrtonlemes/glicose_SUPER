import express, {Request, Response}  from "express"
import patients from "./patients.json"
import fs from "fs"
import path from "path";
import cors from "cors"
const app = express()
const PORT = process.env.PORT || 5000 //criar a porta em um arquivo env

app.use(cors({
    origin: "http://localhost:3000"
}))

app.use(express.json());

app.get('/patients', (req: Request, res: Response)=> {
    try{
        const dataPath = path.join(__dirname, '', 'patients.json');
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))
        res.json(data);
    }catch(error) {
        console.log("Erro ao ler o arquivo JSON: ", error)
        res.status(500).json({message: "Erro ao carregar dados dos pacientes"})
    }
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})