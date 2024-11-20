import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();

app.listen(3000, () => {
    routes(app)
    console.log("servidor escutando");
});
