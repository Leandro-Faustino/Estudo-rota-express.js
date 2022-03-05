#
### Tipos de Parâmetros do Obejeto Request 
> routes params: passado na rota pra [identificar um recurso] editar/deletar/buscar, ex[http://localhost:3333/curso/id];

> query params: Paginação e filtro ex[http://localhost:3333/curso/?page=1&order=asc]

> body params:  Os objetos que passamos pra inserção ou alteração em formato Json
ex: {
	"name": "Danilo Vieira", 
	"username": "danilo" 
}
