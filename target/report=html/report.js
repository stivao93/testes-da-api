$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("pessoa.feature");
formatter.feature({
  "line": 1,
  "name": "Cadastro Pessoa",
  "description": "Eu como usuario da plataforma\r\nQuero cadastrar uma pessoa\r\nPara que eu possa encontrar o seu cadastro posteriormente",
  "id": "cadastro-pessoa",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "\"\u003ccenario\u003e\" - \"\u003cdescricaoDoCenario\u003e\"",
  "description": "",
  "id": "cadastro-pessoa;\"\u003ccenario\u003e\"---\"\u003cdescricaodocenario\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@CadastroPessoa-sucesso"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "que eu acesso o endpoint \"\u003cendpoint\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "eu preencher o body ou uri com o json \"\u003cjson\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "ao enviar a chamada recebo o status code \"\u003ccode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "cadastro-pessoa;\"\u003ccenario\u003e\"---\"\u003cdescricaodocenario\u003e\";",
  "rows": [
    {
      "cells": [
        "Cenario",
        "DescricaoDoCenario",
        "endpoint",
        "json",
        "code"
      ],
      "line": 13,
      "id": "cadastro-pessoa;\"\u003ccenario\u003e\"---\"\u003cdescricaodocenario\u003e\";;1"
    },
    {
      "cells": [
        "CN0001.CT001",
        "Cadastrar Pessoa",
        "/pessoas",
        "pessoa",
        "201"
      ],
      "line": 14,
      "id": "cadastro-pessoa;\"\u003ccenario\u003e\"---\"\u003cdescricaodocenario\u003e\";;2"
    },
    {
      "cells": [
        "CN0001.CT002",
        "Cadastro com CPF ja existente na base",
        "/pessoas",
        "pessoa.json",
        "400"
      ],
      "line": 15,
      "id": "cadastro-pessoa;\"\u003ccenario\u003e\"---\"\u003cdescricaodocenario\u003e\";;3"
    },
    {
      "cells": [
        "CN0001.CT003",
        "Cadastro telefone ja existente",
        "/pessoas",
        "pessoa.json",
        "400"
      ],
      "line": 16,
      "id": "cadastro-pessoa;\"\u003ccenario\u003e\"---\"\u003cdescricaodocenario\u003e\";;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3640700,
  "status": "passed"
});
formatter.before({
  "duration": 1276200,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "\"\u003ccenario\u003e\" - \"\u003cdescricaoDoCenario\u003e\"",
  "description": "",
  "id": "cadastro-pessoa;\"\u003ccenario\u003e\"---\"\u003cdescricaodocenario\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@CadastroPessoa-sucesso"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "que eu acesso o endpoint \"/pessoas\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "eu preencher o body ou uri com o json \"pessoa\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "ao enviar a chamada recebo o status code \"201\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/pessoas",
      "offset": 26
    }
  ],
  "location": "CadastroPessoaSteps.queEuAcessoOEndpoint(String)"
});
formatter.result({
  "duration": 581433900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pessoa",
      "offset": 39
    }
  ],
  "location": "CadastroPessoaSteps.euPreencherOBodyOuUriComOJson(String)"
});
formatter.result({
  "duration": 1086000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 42
    }
  ],
  "location": "CadastroPessoaSteps.aoEnviarAChamadaReceboOStatusCode(String)"
});
formatter.result({
  "duration": 3031944100,
  "status": "passed"
});
formatter.before({
  "duration": 52500,
  "status": "passed"
});
formatter.before({
  "duration": 845900,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "\"\u003ccenario\u003e\" - \"\u003cdescricaoDoCenario\u003e\"",
  "description": "",
  "id": "cadastro-pessoa;\"\u003ccenario\u003e\"---\"\u003cdescricaodocenario\u003e\";;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@CadastroPessoa-sucesso"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "que eu acesso o endpoint \"/pessoas\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "eu preencher o body ou uri com o json \"pessoa.json\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "ao enviar a chamada recebo o status code \"400\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/pessoas",
      "offset": 26
    }
  ],
  "location": "CadastroPessoaSteps.queEuAcessoOEndpoint(String)"
});
formatter.result({
  "duration": 270900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pessoa.json",
      "offset": 39
    }
  ],
  "location": "CadastroPessoaSteps.euPreencherOBodyOuUriComOJson(String)"
});
formatter.result({
  "duration": 12887900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 42
    }
  ],
  "location": "CadastroPessoaSteps.aoEnviarAChamadaReceboOStatusCode(String)"
});
formatter.result({
  "duration": 137087600,
  "status": "passed"
});
formatter.before({
  "duration": 50800,
  "status": "passed"
});
formatter.before({
  "duration": 47100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "\"\u003ccenario\u003e\" - \"\u003cdescricaoDoCenario\u003e\"",
  "description": "",
  "id": "cadastro-pessoa;\"\u003ccenario\u003e\"---\"\u003cdescricaodocenario\u003e\";;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@CadastroPessoa-sucesso"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "que eu acesso o endpoint \"/pessoas\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "eu preencher o body ou uri com o json \"pessoa.json\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "ao enviar a chamada recebo o status code \"400\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/pessoas",
      "offset": 26
    }
  ],
  "location": "CadastroPessoaSteps.queEuAcessoOEndpoint(String)"
});
formatter.result({
  "duration": 152600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pessoa.json",
      "offset": 39
    }
  ],
  "location": "CadastroPessoaSteps.euPreencherOBodyOuUriComOJson(String)"
});
formatter.result({
  "duration": 726600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 42
    }
  ],
  "location": "CadastroPessoaSteps.aoEnviarAChamadaReceboOStatusCode(String)"
});
formatter.result({
  "duration": 73483000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "\"\u003cCenario\u003e\" - \"\u003cdescricaoDoCenario\u003e\"",
  "description": "",
  "id": "cadastro-pessoa;\"\u003ccenario\u003e\"---\"\u003cdescricaodocenario\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@BuscarPessoa-sucesso"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "que eu acesse a api \"\u003capi\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "eu preencher o endpoint com a uri \"\u003curi\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "ao enviar a chamada recebo o cadastro da pessoa e o status code\"\u003ccode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "cadastro-pessoa;\"\u003ccenario\u003e\"---\"\u003cdescricaodocenario\u003e\";",
  "rows": [
    {
      "cells": [
        "Cenario",
        "DescricaoDoCenario",
        "api",
        "uri",
        "code"
      ],
      "line": 25,
      "id": "cadastro-pessoa;\"\u003ccenario\u003e\"---\"\u003cdescricaodocenario\u003e\";;1"
    },
    {
      "cells": [
        "CN0001.CT001",
        "Buscar Pessoa",
        "/pessoas",
        "/11/985388871",
        "200"
      ],
      "line": 26,
      "id": "cadastro-pessoa;\"\u003ccenario\u003e\"---\"\u003cdescricaodocenario\u003e\";;2"
    },
    {
      "cells": [
        "CN0001.CT002",
        "Buscar Pessoa Inexistente",
        "/pessoas",
        "/21/983786575",
        "404"
      ],
      "line": 27,
      "id": "cadastro-pessoa;\"\u003ccenario\u003e\"---\"\u003cdescricaodocenario\u003e\";;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 61700,
  "status": "passed"
});
formatter.before({
  "duration": 51700,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "\"CN0001.CT001\" - \"\u003cdescricaoDoCenario\u003e\"",
  "description": "",
  "id": "cadastro-pessoa;\"\u003ccenario\u003e\"---\"\u003cdescricaodocenario\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@BuscarPessoa-sucesso"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "que eu acesse a api \"/pessoas\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "eu preencher o endpoint com a uri \"/11/985388871\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "ao enviar a chamada recebo o cadastro da pessoa e o status code\"200\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/pessoas",
      "offset": 21
    }
  ],
  "location": "BuscarPessoasSteps.queEuAcesseAApi(String)"
});
formatter.result({
  "duration": 369700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/11/985388871",
      "offset": 35
    }
  ],
  "location": "BuscarPessoasSteps.euPreencherOEndpointComAUri(String)"
});
formatter.result({
  "duration": 160200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 64
    }
  ],
  "location": "BuscarPessoasSteps.aoEnviarAChamadaReceboOCadastroDaPessoaEOStatusCode(String)"
});
formatter.result({
  "duration": 190968100,
  "status": "passed"
});
formatter.before({
  "duration": 49300,
  "status": "passed"
});
formatter.before({
  "duration": 55500,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "\"CN0001.CT002\" - \"\u003cdescricaoDoCenario\u003e\"",
  "description": "",
  "id": "cadastro-pessoa;\"\u003ccenario\u003e\"---\"\u003cdescricaodocenario\u003e\";;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@BuscarPessoa-sucesso"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "que eu acesse a api \"/pessoas\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "eu preencher o endpoint com a uri \"/21/983786575\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "ao enviar a chamada recebo o cadastro da pessoa e o status code\"404\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/pessoas",
      "offset": 21
    }
  ],
  "location": "BuscarPessoasSteps.queEuAcesseAApi(String)"
});
formatter.result({
  "duration": 139600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/21/983786575",
      "offset": 35
    }
  ],
  "location": "BuscarPessoasSteps.euPreencherOEndpointComAUri(String)"
});
formatter.result({
  "duration": 467300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 64
    }
  ],
  "location": "BuscarPessoasSteps.aoEnviarAChamadaReceboOCadastroDaPessoaEOStatusCode(String)"
});
formatter.result({
  "duration": 104620100,
  "status": "passed"
});
});