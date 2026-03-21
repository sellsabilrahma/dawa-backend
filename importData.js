import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import Pharmacie from './Pharmacies.js'; 

dotenv.config();

const importData = async () => {
    try {
        
        console.log("Tentative de connexion à MongoDB...");
        await mongoose.connect(process.env.MONGO_URI);
        console.log(" Connexion réussie !");

        
        const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
        console.log(`Lue : ${data.length} pharmacies depuis data.json`);

        
        await Pharmacie.insertMany(data);

        console.log(" Importation terminée avec succès !");
        process.exit(); 
    } catch (error) {
        console.error(" Erreur lors de l'importation :");
        console.error(error);
        process.exit(1); 
    }
};


importData();
