const notesList = JSON.parse(localStorage.getItem('notesList')) ||[{
  note: 'ex',
  date: '12-22-2026',
  chapter: '6'
}];

renderNotes();

function renderNotes(){  
  let addedHTML = '';
  let id = 0;

  for(let i = 0; i < notesList.length; i++){
    const notesObject = notesList[i];
    const note = notesObject.note;
    const date = notesObject.date;
    const chapter = notesObject.chapter;
    const html = `
    <div class="note-card">
      <div>${note} ${date} ${chapter}</div>
      <button class="btn" onclick="
        notesList.splice(${i}, 1);
        renderNotes();
      ">Delete</button>
    </div>
    `;
    addedHTML += html;
  }
  document.querySelector('.notes-container').innerHTML = addedHTML;
}


function addNote(){
  const noteElement = document.querySelector('.input-val');
  const dateElement = document.querySelector('.date-val');
  const chapterElement = document.querySelector('.num-val');
  const note = noteElement.value;
  const date = dateElement.value;
  const chapter = chapterElement.value;

  if(note === '' || date === ''){
    return;
  }

  notesList.push({
    note: note,
    date: date,
    chapter: chapter
  });

  noteElement.value = '';
  renderNotes();

  saveToStorage();

  console.log(notesList);
}

function saveToStorage(){
  localStorage.setItem('notesList', JSON.stringify(notesList));
}

