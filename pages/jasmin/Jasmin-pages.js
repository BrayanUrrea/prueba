import { contain, Ensure, equals, includes, isGreaterThan } from '@serenity-js/assertions'
import { Check, d, Task, Wait } from '@serenity-js/core'
import { By, Click, Enter, ExecuteScript, isVisible, Key, Navigate, Page, PageElement, PageElements, Press, Text } from '@serenity-js/web'
const mostrar = require('../../Aut/connBD')


export class TodoList {

    // Public API captures the business domain-focused tasks
    // that an actor interacting with a TodoList app can perform

    static ingresarPagina = () =>
        Task.where('#actor espera que se encuentre disponible las politicas',
            Navigate.to('https://www.livejasmin.com/es/chicas/?forcedesktop=1'),
            Ensure.that(
                Page.current().title().describedAs('website title'),
                equals('Shows de Sexo en Vivo, Chat GRATIS con camgirls | LiveJasmin'),
            ),
            Wait.until(this.#cookies(), isVisible()),
        )

    static verificarPoliticas = () =>
        Task.where(`#actor verifica las politicas`,
            TodoList.ingresarPagina(),
            this.aceptarCookies(),
        )

    static aceptarCookies = () =>
        Task.where(d`#actor acepta cookies de la pagina `,
            Click.on(this.#cookies()),
            Wait.until(this.#login(), isVisible()),
        )

    static clickIngresar = () =>
        Task.where(d`#actor verifica sus credenciales`,
            Click.on(this.#login()),
            Wait.until(this.#user(), isVisible()),
        )


    static datosLogin = () =>
        Task.where(d`#actor ingresa datos solicitados y da click sobre el botón de Entrar`,
            Enter.theValue(
                mostrar().then((p) =>{
                    p[0]['user']
                    console.log(p[0]['password'])
                })
            ).into(this.#user()),
            Enter.theValue(
                mostrar().then((p) =>{
                   p[0]['password']
                })
            ).into(this.#password()),
            Click.on(this.#entrar()),
        )

    // Private API captures ways to locate interactive elements and data transformation logic.
    // Private API supports the public API and is not used in the test scenario directly.
    static #cookies = () =>
        PageElement.located(By.css('.sc-dicizt.eBQMQY.sc-bMOqnl.cMaEDV'))
            .describedAs('Aceptar Cookies')

    static #login = () =>
        PageElement.located(By.css('.kolevD'))
            .describedAs('Entrar')

    static #entrar = () =>
        PageElement.located(By.css('#login_submit'))
            .describedAs('Entrar')

    static #user = () =>
        PageElement.located(By.css("#username"))
            .describedAs('Usuario')

    static #password = () =>
        PageElement.located(By.css("#password"))
            .describedAs('Contraseña')

}
