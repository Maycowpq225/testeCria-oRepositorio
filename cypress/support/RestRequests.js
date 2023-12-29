class RestRequests { //É feita a criação de uma classe
  
    requisicaoPostComJson(jsonBody, url) { //Criação de um metodo, metodo qual realiza uma requisão do tipo post, passando um json
        return cy.request({
            method: 'POST',  // tipo de metodo a ser utilizado na requisão, pode ser do tipo "POST", "GET", "PUT", "DELETE"
            headers: { //headers passados para a api
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: jsonBody, //body passado no request da api
            url: url, //url da api a ser feito o request
            failOnStatusCode: false //Serve para o teste dar continuidade mesmo se o status code for diferente de 200 ou 201
        })
    }//final do metodo 'fazerRequisicaoPostComJson'

    requisacaoGetAtributoUrl(id, url) {
        response = cy.request({
            method: 'GET',
            url: url + '/' + id, //url da api a ser feito o request
            failOnStatusCode: false //Serve para o teste dar continuidade mesmo se o status code for diferente de 200 ou 201
        });
        return response;
    }

    // metodo incompleto
    requisicaoGetComParametros() {
        reponse = cy.request({
            method: 'GET',
            url: url,
            failOnStatusCode: false //Serve para o teste dar continuidade mesmo se o status code for diferente de 200 ou 201
        })
    }
}
export default RestRequests //necessario para ser visualizada pelo restante das classes