// app.js
function addNote() {
  const input = document.getElementById('noteInput');
  const note = input.value;
  if (note) {
    const notes = getNotes();
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
    renderNotes();
    input.value = '';
  }
}

function getNotes() {
  const notes = localStorage.getItem('notes');
  return notes ? JSON.parse(notes) : [];
}

function renderNotes() {
  const list = document.getElementById('notesList');
  list.innerHTML = '';
  const notes = getNotes();
  notes.forEach(note => {
    const li = document.createElement('li');
    li.textContent = note;
    list.appendChild(li);
  });
}

// Render existing notes on load
window.onload = renderNotes;

