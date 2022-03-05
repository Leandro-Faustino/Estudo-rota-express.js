// BÁSICO DE ROTAS NO NODEJS

//exporta o modulo express
const express = require("express");

//chama o metodo express
const app = express();
app.use(express.json());
// tipos de paramentros
// routes params =passado na rota pra [identificar um recurso] editar/deletar/buscar
// query params = Paginação e filtro 
// body params = os objetos que passamos pra inserção ou alteração json

app.get("/curso", (request,response) => {
   //query params
   const query = request.query;
   console.log(query);
   return response.json(["curso1", "curso2" ,"curso3","curso7"]);
});

app.post("/curso", (request,response) => {
//body params
   const {name, username}  = request.body;
   console.log({name,username});
   return response.json({name,username});
 });

 app.put("/curso/:id", (request,response) => {
   //route params
   const {id} = request.params;
   console.log(id);
   return response.json(["curso1", "curso2" ,"curso3","curso5"]);
 });

 app.patch("/curso/:id", (request,response) => {
    return response.json(["curso1", "curso2" ,"curso3","curso6"]);
 });

 app.delete("/curso/:id", (request,response) => {
    return response.json(["curso1", "curso2"]);
 });

app.listen(3333);