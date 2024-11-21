import express from "express";
import { listarPosts, postarNovoPost } from "../controller/postsController.js";

 const routes = (app) => {
    app.use(express.json());
    app.get("/posts", listarPosts);    //busca
    app.post("/posts", postarNovoPost);//criar
}
export default routes;

