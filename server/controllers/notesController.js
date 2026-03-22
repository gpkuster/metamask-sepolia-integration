let notes = [];
let currentId = 1;

// Create
exports.createNote = (req, res) => {
  console.log("➡️  [CREATE] Incoming request body:", req.body);

  const { title, content } = req.body;

  const newNote = {
    id: currentId++,
    title,
    content
  };

  notes.push(newNote);

  console.log("✅  [CREATE] Note created:", newNote);
  console.log("📦  Current notes state:", notes);

  res.status(201).json(newNote);
};

// Get all
exports.getAllNotes = (req, res) => {
  console.log("➡️  [GET ALL] Fetching all notes");
  console.log("📦  Current notes state:", notes);

  res.json(notes);
};

// Get by id
exports.getNoteById = (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`➡️  [GET BY ID] Requested ID: ${id}`);

  const note = notes.find(n => n.id === id);

  if (!note) {
    console.log("❌  [GET BY ID] Note not found");
    return res.status(404).json({ message: "Note not found" });
  }

  console.log("✅  [GET BY ID] Note found:", note);

  res.json(note);
};

// Update
exports.updateNote = (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`➡️  [UPDATE] Requested ID: ${id}`);
  console.log("📥  [UPDATE] Incoming body:", req.body);

  const note = notes.find(n => n.id === id);

  if (!note) {
    console.log("❌  [UPDATE] Note not found");
    return res.status(404).json({ message: "Note not found" });
  }

  note.title = req.body.title ?? note.title;
  note.content = req.body.content ?? note.content;

  console.log("✅  [UPDATE] Note updated:", note);
  console.log("📦  Current notes state:", notes);

  res.json(note);
};

// Delete
exports.deleteNote = (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`➡️  [DELETE] Requested ID: ${id}`);

  const index = notes.findIndex(n => n.id === id);

  if (index === -1) {
    console.log("❌  [DELETE] Note not found");
    return res.status(404).json({ message: "Note not found" });
  }

  const deleted = notes.splice(index, 1);

  console.log("🗑️  [DELETE] Note deleted:", deleted[0]);
  console.log("📦  Current notes state:", notes);

  res.json(deleted[0]);
};