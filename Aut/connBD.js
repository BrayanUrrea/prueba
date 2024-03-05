const mongoose = require('mongoose');
const { Schema } = mongoose;
require('dotenv').config()


mongoose.connect(process.env.MONGODB_URI, {

})
    .then(() => console.log('CONECTADO A MONGODB'))
    .catch((e) => console.log('ERROR' + e))


const user = new Schema({
    user: String,
    password: String
});


const usuarios = mongoose.model('usuarios', user);


const mostrar = async () => {
    const personas = await usuarios.find()
    return personas;
}


module.exports = mostrar;


