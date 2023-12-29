import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import RestRequests from "../../support/RestRequests.js" // Importando a classe do caminho do arquivo passado

const classeRestRequestsInstanciada = new RestRequests(); //Instaciando a classe dentro de uma variavel constante
const urlCadastroUsuario = "https://barrigarest.wcaquino.me/usuarios";
const caminhoResponseCriarUsuario= "cypress/fixtures/endPointCadastroUsuarios/responses/responseJsonCriarUsuario.json";

Given("que criamos um novo usuario e salvamos em um json", function () {
    cy.gerarNomeAleatorio().then(nomeGerado => {
        cy.gerarEmailAleatorio(nomeGerado).then(emailGerado => {
             
            const jsonDaRequestUsuario = {
                "nome": nomeGerado, 
                "email": emailGerado, 
                "senha": "1234567", 
                "redirecionar": false
            }

            cy.writeFile('cypress/fixtures/endPointCadastroUsuarios/requests/jsonRequestUsuario.json', jsonDaRequestUsuario)
        });
    });
});

When('realizado o request da api de cadastro passando o json do usuario criado', () => {
    cy.readFile('cypress/fixtures/endPointCadastroUsuarios/requests/jsonRequestUsuario.json').then((requestJsonCriarUsuario) => {
        const jsonEmFormatoString = JSON.stringify(requestJsonCriarUsuario);
        classeRestRequestsInstanciada.requisicaoPostComJson(jsonEmFormatoString, urlCadastroUsuario).then(response => {
            cy.writeFile(caminhoResponseCriarUsuario, JSON.stringify(response));
        })
    }) 
})