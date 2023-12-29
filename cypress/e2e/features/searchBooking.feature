Feature: qualquer

    Scenario Outline: Cadastro de usuario com sucesso
    Given que criamos um novo usuario e salvamos em um json
    When realizado o request da api de cadastro passando o json do usuario criado
    Then o response 'endPointCadastroUsuarios/responses/responseJsonCriarUsuario.json' deve conter o status code 201
    And o response 'endPointCadastroUsuarios/responses/responseJsonCriarUsuario.json' deve conter a mensagem '"statusText":"Created"'