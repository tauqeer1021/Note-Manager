import express from "express"
import { Create, Delete, GetNotes, UpdateNotes } from "../controllers/Notes.js";
import { VerificationToken } from "../middlewares/Verificationtoken.js";

const NotesRoute = express.Router();

NotesRoute.post("/createnote", VerificationToken, Create);
NotesRoute.put("/updateNotes/:id", VerificationToken, UpdateNotes);
NotesRoute.delete("/deleteNotes/:id", VerificationToken, Delete)
NotesRoute.get("/GetNotes", VerificationToken, GetNotes);
export default NotesRoute;