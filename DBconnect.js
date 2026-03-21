import { connect } from "mongoose";

async function connectDB(dbName) {
    try {
        const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/";
        await connect(`${uri}${dbName}`);
        console.log(` MongoDB Connecté à la base : ${dbName}`);
    } catch (error) {
        console.error(" Erreur de connexion MongoDB :", error.message);
        process.exit(1);
    }
}

export default connectDB;