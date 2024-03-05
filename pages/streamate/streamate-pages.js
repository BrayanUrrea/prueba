import { contain, Ensure, equals, includes, isGreaterThan } from '@serenity-js/assertions'
import { Check, d, Task, Wait } from '@serenity-js/core'
import { By, Click, Enter, ExecuteScript, isVisible, Key, Navigate, Page, PageElement, PageElements, Press, Text } from '@serenity-js/web'

export class TodoList {

    // Public API captures the business domain-focused tasks
    // that an actor interacting with a TodoList app can perform

    static ingresarPagina = () =>
        Task.where('#actor espera que se encuentre disponible las politicas',
            Navigate.to('https://www.streamate.com/'),
            Ensure.that(
                Page.current().title().describedAs('website title'),
                equals('Streamate - Web Cam Video Chat'),
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
            Enter.theValue('Brian').into(this.#user()),
            Enter.theValue('123456789').into(this.#password()),
        )

    // Private API captures ways to locate interactive elements and data transformation logic.
    // Private API supports the public API and is not used in the test scenario directly.
    static #cookies = () =>
        PageElement.located(By.css('.RaisedButton-variables-0-2-5.RaisedButton-variables-d0-0-2-17.RaisedButton-primary-0-2-11.RaisedButton-root-0-2-6.RaisedButton-primary-d2-0-2-19.RaisedButton-small-0-2-12.RaisedButton-root-0-2-6.RaisedButton-labelWidth-0-2-7'))
            .describedAs('Estoy de acuerdo')

    static #login = () =>
        PageElement.located(By.css('.Header-leftActionWrapper-0-2-23'))
            .describedAs('Log In')

    static #entrar = () =>
        PageElement.located(Button.withText("Log In"))
            .describedAs('Log In')

    static #user = () =>
        PageElement.located(By.css("#email"))
            .describedAs('Email')

    static #password = () =>
        PageElement.located(By.css("#password"))
            .describedAs('Password')

}
