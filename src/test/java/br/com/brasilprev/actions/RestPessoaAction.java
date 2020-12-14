package br.com.brasilprev.actions;

import io.restassured.RestAssured;
import io.restassured.response.ValidatableResponse;

public class RestPessoaAction {

	final String baseUri = "http://localhost:8080";
	
	
	public ValidatableResponse cadastraPessoa (String uri, String body, int code) {
		
		ValidatableResponse request = RestAssured.given().contentType("application/json")
				.body(body).baseUri(baseUri).when().post(uri).then().statusCode(code);
		
		return request;
		
	}
	
	public ValidatableResponse buscaPessoa (String uri, int code) {
		
		ValidatableResponse request = RestAssured.given().contentType("application/json")
				.body("").baseUri(baseUri).when().get(uri).then().statusCode(code);
		
		return request;
		
	}
	
	
	
}
