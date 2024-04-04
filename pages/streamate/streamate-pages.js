import { contain, Ensure, equals, includes, isGreaterThan } from '@serenity-js/assertions'
import { Check, d, Task, Wait, Masked } from '@serenity-js/core'
import { By, Click, Enter, ExecuteScript, isVisible, Key, Navigate, Page, PageElement, PageElements, Press, Text } from '@serenity-js/web'

import { usuario, contraseña } from "../../Aut/connBD.js"

const usua = usuario();
const pass = contraseña();

export class TodoList {

    // Public API captures the business domain-focused tasks
    // that an actor interacting with a TodoList app can perform

    static ingresarPagina = () =>
        
        Task.where('#actor espera que se encuentre disponible las politicas',
            Navigate.to('https://www.streamate.com/'),
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
        Enter.theValue(usua).into(this.#user()),
        Enter.theValue(Masked.valueOf(pass)).into(this.#password()),
    )

    // Private API captures ways to locate interactive elements and data transformation logic.
    // Private API supports the public API and is not used in the test scenario directly.
    static #cookies = () =>
    PageElement.located(By.xpath('./html/body/div[1]/div/div/div/div[1]/button'))
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
