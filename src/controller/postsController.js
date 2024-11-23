import {getTodosPosts, criarPost} from "../models /postsModel.js";
import fs from "fs";

export async function listarPosts(req, res) {
    const posts =  await getTodosPosts()
    res.status(200).json(posts);
}

export async function postarNovoPost(req,res) {
    const novoPost = req.body;
    try {
            const postCriado = await criarPost(novoPost);
            res.status(200).json(postCriado);
    } catch (erro){
        console.error(erro.message);
        res.status(500).json ({"erro":"falha na requisição"})
    }
}

export async function uploadImagem(req, res) {
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try {
        const postCriado = await criarPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png` //juntar string com variavel pra criar uma string nova
        fs.renameSync(req.file.path, imagemAtualizada) //fs = file sistem
        res.status(200).json(postCriado);  
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"})
    }
}