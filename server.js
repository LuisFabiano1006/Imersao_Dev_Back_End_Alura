import express from "express";
// Importa o framework Express, que será utilizado para criar o servidor web.
import routes from "./src/routes/postsRoutes.js";

const app = express();
// Cria uma instância do Express, que será o núcleo do nosso servidor.
routes(app);

app.listen(3000, () => {
    console.log("Servidor escutando...");
    // Inicia o servidor na porta 3000 e exibe uma mensagem no console quando o servidor estiver pronto.
});
