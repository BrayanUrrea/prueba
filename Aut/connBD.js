import * as mongoose from "mongoose"
const { Schema } = mongoose;
import { } from 'dotenv/config'


// mongoose.connect(process.env.MONGODB_URI, {

// })
//     .then(() => console.log('CONECTADO A MONGODB'))
//     .catch((e) => console.log('ERROR' + e))

const dbConnect = async () => {
    try {
        const dbUri = process.env.MONGODB_URI;

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



export const mostrar = async () => {
    try {
        const personas = await usuarios.find({ user: "bryan" })
        return personas;
    } catch (error) {
        return error;
    }

}