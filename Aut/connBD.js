import * as mongoose from "mongoose"
const { Schema } = mongoose;
import { } from 'dotenv/config'


mongoose.connect(process.env.MONGODB_URI, {

})
    .then(() => console.log('CONECTADO A MONGODB'))
    .catch((e) => console.log('ERROR' + e))


const user = new Schema({
    user: String,
    password: String
});


const usuarios = mongoose.model('usuarios', user);



export const mostrar = async () => {
    const personas = await usuarios.find()
    return personas;
}