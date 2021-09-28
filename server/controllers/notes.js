import NoteModel from "../models/noteModel.js";
export const getNotes = async (req, res) => {
    try {
        const noteModels = await NoteModel.find();

        res.status(200).json(noteModels);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createNote = async (req, res) => {
    const note = req.body;

    const newNote = new NoteModel(note);

    try {
        await newNote.save();

        res.status(201).json(newNote);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}