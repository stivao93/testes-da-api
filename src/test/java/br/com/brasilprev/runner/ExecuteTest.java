package br.com.brasilprev.runner;



import org.junit.runner.RunWith;
import cucumber.api.SnippetType;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



@RunWith(Cucumber.class)
@CucumberOptions(tags = {},


plugin = {"pretty", "html:target/report=html",
		"json:target/report-html"},
monochrome = true,
features ="src/test/resources",
snippets = SnippetType.CAMELCASE,
glue = {"br.com.brasilprev.steps"})





public class ExecuteTest {

}
