// app.js
function addNote() {
  const input = document.getElementById('noteInput');
  const note = input.value;
  if (note) {
    const list = document.getElementById('notesList');
    const li = document.createElement('li');
    li.textContent = note;
    list.appendChild(li);
    input.value = '';
  }
}
