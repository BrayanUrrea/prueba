import { defineParameterType } from '@cucumber/cucumber'
import { actorCalled, actorInTheSpotlight } from '@serenity-js/core'

defineParameterType({
    regexp: /[A-Z][a-z]+/,
    transformer(name) {
        return actorCalled(name)
    },
    name: 'actor',
})

defineParameterType({
    regexp: /el|ella|ellos/,
    transformer() {
        return actorInTheSpotlight()
    },
    name: 'pronoun',
})
