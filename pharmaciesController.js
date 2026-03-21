import pharmacie from "./Pharmacies.js";

async function getAllPharmacies(req, res) {
    try {
        const Pharmacies = await pharmacie.find({});
        if (Pharmacies.length === 0) return res.status(404).json({message: "No pharmacies found"});
        return res.status(200).json(Pharmacies);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
}

async function getOnePharmacie(req, res) {
    try {
        const onePharmacie = await pharmacie.findById(req.params.id);
        if(!onePharmacie) return res.status(404).json({message: "Pharmacie not found!"});
        return res.status(200).json(onePharmacie);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
}

async function createOnePharmacie(req, res) {
    try {
        const newPharmacie = new pharmacie(req.body);
        const createdPharmacie = await newPharmacie.save();
        return res.status(201).json(createdPharmacie);    
    } catch (error) {
        console.error(error);
        res.status(400).json({message: "Failure! Data is missing or invalid."});
    }
}

async function deleteOnePharmacie(req, res){
    try {
        const deletedPharmacie = await pharmacie.findByIdAndDelete(req.params.id);
        if (!deletedPharmacie) return res.status(404).json({message: "Not found"});
        return res.status(200).json({message: "Deleted successfully", data: deletedPharmacie});
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
}

async function updateGarde(req, res) {
    try {
        const updated = await pharmacie.findByIdAndUpdate(
            req.params.id, 
            { estdegarde: req.body.estdegarde }, 
            { new: true }
        );
        res.status(200).json(updated);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getByCommune(req, res) {
    try {
        const pharmacies = await pharmacie.find({ 
            pharmaciecommune: req.params.commune, 
            estdegarde: true 
        });
        res.status(200).json(pharmacies);
    } catch (err) {
        res.status(500).json(err);
    }
}


export {
    getAllPharmacies,
    getOnePharmacie,
    createOnePharmacie,
    deleteOnePharmacie,
    updateGarde,
    getByCommune
};
