import { Schema, model } from "mongoose";

const pharmacieSchema = new Schema ({
    pharmacieName: {
        type: String,
        required: true
    },
    pharmaciewilaya: {
        type: String,
        required: true
    },
    pharmaciecommune: {
        type: String,
        required: true
    },
    pharmaciePhone: {
        type: String
    },
    pharmacieMail: {
        type: String,
    },
    pharmacieadresse: String,
    pharmacielocalisation: {
        lat: Number,
        lng: Number,
    },
    estdegarde: { type: Boolean, default: false}
});

const pharmacie = model("pharmacie", pharmacieSchema, "pharmacies");



export default pharmacie;
