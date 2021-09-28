import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
    title: String,
    content: String
});

const NoteModel = mongoose.model('NoteModel', noteSchema);

export default NoteModel;