const noteCrtl = {};

const Note = require("../models/Note");
const NoteModel = require("../models/Note");

noteCrtl.getNotes = async (req, res) => {
  const notes = await NoteModel.find();
  res.json(notes);
};

noteCrtl.createNote = async (req, res) => {
  const { title, content, date, author } = req.body;
  const newNote = new NoteModel({
    title: title,
    content: content,
    date: date,
    author: author,
  });
  await newNote.save();
  console.log(newNote);
  res.json({ message: "Note saved" });
};

noteCrtl.getNote = async (req, res) => {
  const note = await NoteModel.findById(req.params.id);
  console.log(note);
  res.json(note);
};
noteCrtl.updateNote = async (req, res) => {
  const { title, content, author } = req.body;
  await NoteModel.findOneAndUpdate(
    { _id: req.params.id },
    {
      title,
      author,
      content,
    }
  );
  res.json({ message: "Note updated" });
};

noteCrtl.deleteNote = async (req, res) => {
  await NoteModel.findByIdAndDelete(req.params.id);
  res.json({ message: "Note deleted" });
};

module.exports = noteCrtl;
