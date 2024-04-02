import { mostrar } from './connBD.js'

mostrar().then((p) =>{
    console.log(p[0]['user'])
    console.log(p[0]['password'])
})

