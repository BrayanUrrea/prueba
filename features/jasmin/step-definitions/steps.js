import { Given, When, Then } from '@cucumber/cucumber'
import { Ensure, equals } from '@serenity-js/assertions'

import { TodoList } from '../../../pages/jasmin/Jasmin-pages.js'

Given('{actor} ingresa a la pagina web',{timeout: 5 * 5000}, async (actor) => {
    await actor.attemptsTo(
        TodoList.verificarPoliticas(),
    )
})

When('{pronoun} da click sobre el botón de ingresar', async (actor) => {
    await actor.attemptsTo(
        TodoList.clickIngresar(),
    )
})

Then('{pronoun} debe ingresar usuario y contraseña', async (actor) => {
    await actor.attemptsTo(
        TodoList.datosLogin(),
    )
})

Then('call read', () => {
  // Write code here that turns the phrase above into concrete actions
})

Then('var &#x3D; {int}', (int) => {
  // Write code here that turns the phrase above into concrete actions
})

Then('call read', () => {
  // Write code here that turns the phrase above into concrete actions
})

Then('call read', () => {
  // Write code here that turns the phrase above into concrete actions
})

/**
 * Extracts the data from a single-column Cucumber DataTable and returns it as an `Array<string>`
 *
 * @param table
 */
function itemsFrom(table) {
    return table.raw().map(row => row[0])
}
