Cypress.Commands.add('gerarNomeAleatorio', () => {
    cy.readFile('cypress/fixtures/endPointCadastroUsuarios/requests/listaDeNomes.json').then((jsonListaNomes) => {
        const listaNomes = jsonListaNomes.nomes; //Armazenando a lista de nomes do json, dentro de uma variavel constante.
        const posicaoNomeComPonto = Math.random() * listaNomes.length;  //Math.random() =>  Gera um numero aleatorio com virgula de 0 a 1 (0,64565465)
        const posicaoNomeSemPonto = Math.floor(posicaoNomeComPonto);    //Math.floor()  =>  Transforma numeros com virgula em numeros inteiros (1,00 > 1)

        return listaNomes[posicaoNomeSemPonto]; // retorna um dos nome da listaNomes conforme numero aleatorio gerado anteriormente
    })
})

Cypress.Commands.add('gerarEmailAleatorio', (nomeGerado) => {

    const min = 100000000; //Numero menor do nosso range
    const max = 999999999; //Numero maior do nosso range

    const numeroAleatorioDe9Digitos = Math.floor(Math.random() * (max - min + 1)) + min; // Calculo para gerar um numero aleatorio entre dois pontos, ou seja um range

    return nomeGerado + numeroAleatorioDe9Digitos + '@hotmail.com';
})
