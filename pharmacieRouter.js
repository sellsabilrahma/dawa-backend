import { Router } from "express";
import { 
    createOnePharmacie, 
    deleteOnePharmacie, 
    getAllPharmacies, 
    getOnePharmacie, 
    updateGarde,
    getByCommune
} from "./pharmaciesController.js";

const pharmacieRouter = Router();
pharmacieRouter.get("/garde/:commune", getByCommune);
pharmacieRouter.get("/", getAllPharmacies);
pharmacieRouter.get("/:id", getOnePharmacie);
pharmacieRouter.post("/create", createOnePharmacie);
pharmacieRouter.put("/update/:id", updateGarde);
pharmacieRouter.delete("/delete/:id", deleteOnePharmacie);

export default pharmacieRouter;
