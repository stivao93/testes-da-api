package br.com.brasilprev.steps;

import br.com.brasilprev.actions.RestPessoaAction;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BuscarPessoasSteps {

	RestPessoaAction restPessoaAction;

	private String path;
	private int statusCode;

	@Before
	public void setup() {
		restPessoaAction = new RestPessoaAction();
	}

	@Given("^que eu acesse a api \"([^\"]*)\"$")
	public void queEuAcesseAApi(String api) throws Throwable {
		System.out.println("acesso a api " + api);
		path = api;

	}

	@When("^eu preencher o endpoint com a uri \"([^\"]*)\"$")
	public void euPreencherOEndpointComAUri(String uri) throws Throwable {
		System.out.println("buscando pessoa " + uri);
		path = path + uri;

	}

	@Then("^ao enviar a chamada recebo o cadastro da pessoa e o status code\"([^\"]*)\"$")
	public void aoEnviarAChamadaReceboOCadastroDaPessoaEOStatusCode(String code) throws Throwable {
		System.out.println("recebendo o status code" + code);
		statusCode = Integer.parseInt(code);
		restPessoaAction.buscaPessoa(path, statusCode);

	}

}
