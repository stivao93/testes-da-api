Feature: Cadastro Pessoa
  Eu como usuario da plataforma
  Quero cadastrar uma pessoa
  Para que eu possa encontrar o seu cadastro posteriormente

  @CadastroPessoa-sucesso
  Scenario Outline: "<cenario>" - "<descricaoDoCenario>"
    Given que eu acesso o endpoint "<endpoint>"
    When eu preencher o body ou uri com o json "<json>"
    Then ao enviar a chamada recebo o status code "<code>"

    Examples: 
      | Cenario      | DescricaoDoCenario                    | endpoint | json        | code |
      | CN0001.CT001 | Cadastrar Pessoa                      | /pessoas | pessoa      |  201 |
      | CN0001.CT002 | Cadastro com CPF ja existente na base | /pessoas | pessoa.json |  400 |
      | CN0001.CT003 | Cadastro telefone ja existente        | /pessoas | pessoa.json |  400 |


  @BuscarPessoa-sucesso
  Scenario Outline: "<Cenario>" - "<descricaoDoCenario>"
    Given que eu acesse a api "<api>"
    When eu preencher o endpoint com a uri "<uri>"
    Then ao enviar a chamada recebo o cadastro da pessoa e o status code"<code>"

    Examples: 
      | Cenario      | DescricaoDoCenario                     | api      | uri           | code |
      | CN0002.CT001 | Buscar Pessoa                          | /pessoas | /11/985388871 |  200 |
      | CN0002.CT002 | Buscar Pessoa Inexistente              | /pessoas | /21/983786575 |  404 |
      | CN0002.CT003 | Buscar Pessoa sem informar numero      | /pessoas | /11/          |  404 |
      | CN0002.CT004 | Buscar Pessoa sem informar DDD         | /pessoas | / /912345678  |  404 |
      | CN0002.CT005 | Buscar Pessoa sem informar nenhum dado | /pessoas |               |  405 |
