package br.com.brasilprev.builder;

import java.io.FileReader;
import java.util.Random;

import gherkin.deps.com.google.gson.JsonParser;

public class JsonBuilder {

	private static final String JSON_FILES_PATH = "./src/test/resources/json/";

	public String retornaJson(String fileName) {
		JsonParser parser = new JsonParser();
		try {
			Object json = parser.parse(new FileReader(JSON_FILES_PATH + fileName));
			return json.toString();
		} catch (Exception e) {

		}

		return null;
	}

	public String cadastroPessoa() {
		String pessoa = "{\"codigo\": 0,\"nome\": \"Pessoa Teste " + geraSufixo() + "\",\"cpf\": \"12" + geraSufixo()
				+ "\",\"enderecos\": [{\"logradouro\": \"Rua Alexandre Dumas\",\"numero\": 123,\"complemento\": \"Empresa\",\"bairro\": \"Chacara Santo Antonio\",\"cidade\": \"São Paulo\",\"estado\": \"SP\"}],\"telefones\": [{\"ddd\": \"11\",\"numero\": \""
				+ geraSufixo() + "\"}]}";
		return pessoa;
	}

	public int geraSufixo() {
		Random sufixo = new Random();
		int sufixoId = sufixo.nextInt(999999999);
		return sufixoId;
	}

}
