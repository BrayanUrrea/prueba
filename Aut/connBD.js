import * as mongoose from "mongoose"
const { Schema } = mongoose;
import { } from 'dotenv/config'

const dbUri = "mongodb+srv://mongo-1234:zEj6QmoxzvEFQmgv@cluster0.otxrshk.mongodb.net/registros";

const dbConnect = async () => {
    try {

        console.log(`Connecting DB`);

        return await mongoose.connect(dbUri);
    } catch (error) {
        console.log("Error trying to connect to DB: ", error);
        return false;
    }
};



dbConnect();


const user = new Schema({
    user: String,
    password: String
});


const usuarios = mongoose.model('usuarios', user);



export const usuario = async () => {
    const personas = await usuarios.find({ user: "bryan" })
    console.log("finByPersona",personas)
    return personas[0]['user'];
}

export const contraseña = async () => {
    const personas = await usuarios.find({ user: "bryan" })
    console.log("finByPersona",personas)
    return personas[0]['password'];
}

