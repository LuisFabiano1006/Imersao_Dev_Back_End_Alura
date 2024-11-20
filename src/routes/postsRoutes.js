import express from "express";
import { listarPosts } from "../controller/postsController.js";

const routes = (app) => {
    app.use(express.json());
    // Habilita o middleware express.json() para que o servidor possa entender requisições com corpo em formato JSON.
    app.get("/posts", listarPosts);
}

export default routes;
