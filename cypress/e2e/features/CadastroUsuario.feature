Feature: Cadastro de Usuario

    Scenario Outline: Cadastro de usuario com sucesso
    Given que criamos um novo usuario e salvamos em um json
    When realizado o request da api de cadastro passando o json do usuario criado
    Then o response 'endPointCadastroUsuarios/responses/responseJsonCriarUsuario.json' deve conter o status code 201
    And o response 'endPointCadastroUsuarios/responses/responseJsonCriarUsuario.json' deve conter a mensagem '"statusText":"Created"'

    Scenario Outline: Cadastro de usuario com email ja utilizado
    Given que criamos um novo usuario e salvamos em um json
    When realizado o request da api de cadastro passando o json do usuario criado
    When realizado o request da api de cadastro passando o json do usuario criado
    Then o response 'endPointCadastroUsuarios/responses/responseJsonCriarUsuario.json' deve conter o status code 500
    And o response 'endPointCadastroUsuarios/responses/responseJsonCriarUsuario.json' deve conter a mensagem 'already exists.'
