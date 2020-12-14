package br.com.brasilprev.steps;

import br.com.brasilprev.actions.RestPessoaAction;
import br.com.brasilprev.builder.JsonBuilder;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CadastroPessoaSteps {

	RestPessoaAction restPessoaAction;
	JsonBuilder jsonBuilder;

	private String path;
	private String body;
	private int statusCode;

	@Before
	public void setup() {
		restPessoaAction = new RestPessoaAction();
		jsonBuilder = new JsonBuilder();
	}

	@Given("^que eu acesso o endpoint \"([^\"]*)\"$")
	public void queEuAcessoOEndpoint(String endpoint) throws Throwable {
		System.out.println("setando o endpoint de cadastro " + endpoint);
		path = endpoint;
	}

	@When("^eu preencher o body ou uri com o json \"([^\"]*)\"$")
	public void euPreencherOBodyOuUriComOJson(String json) throws Throwable {
		System.out.println("inserindo o json " + json);
		if (json.equals("pessoa.json")) {
			body = jsonBuilder.retornaJson(json);
		} else {
			body = jsonBuilder.cadastroPessoa();
		}

	}

	@Then("^ao enviar a chamada recebo o status code \"([^\"]*)\"$")
	public void aoEnviarAChamadaReceboOStatusCode(String code) throws Throwable {
		System.out.println("recebendo status code " + code);
		statusCode = Integer.parseInt(code);
		restPessoaAction.cadastraPessoa(path, body, statusCode);
	}

}
