const {Router}=require("express");
const { getNotes, createNote, getNote, updateNote, deleteNote } = require("../controllers/notesController");
require("../controllers/notesController")
const router=Router();

router.route("/")
    .get(getNotes)
    .post(createNote)

router.route("/:id")
.get(getNote)
.put(updateNote)
.delete(deleteNote)

module.exports=router;