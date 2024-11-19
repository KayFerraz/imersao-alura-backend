import express from "express";

const posts = [
    {
      descricao: "uma foto teste",
        imagem: "https://placecats.com/millie/300/150",
    },
    { descricao: "Gato fazendo yoga", 
        imagem: "https://placecats.com/millie/300/150"
     },
    {descricao: "Gato fazendo panqueca", 
        imagem: "https://placecats.com/millie/300/150"}
]

const app = express();
app.listen(3000, () => {
    console.log("servidor escutando");
});

app.get("/api", (req ,res) => {
    res.status(200).send("rota inicial");
});

// erros 400>: erros na faixa do cliente
// erros 500>: erros na faixa do servidor 
// status http: https://http.cat/