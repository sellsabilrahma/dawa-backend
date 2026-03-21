import { connect } from "mongoose";

async function connectDB() {
    try {
        
        const uri = process.env.MONGO_URI; 
        
        if (!uri) {
            throw new Error("La variable MONGO_URI est manquante dans l'environnement !");
        }

        await connect(uri);
        console.log(" MongoDB Connecté avec succès !");
    } catch (error) {
        console.error(" Erreur de connexion MongoDB :", error.message);
        process.exit(1);
    }
}

export default connectDB;
