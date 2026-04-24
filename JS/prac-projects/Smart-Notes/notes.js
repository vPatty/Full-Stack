const notesList = JSON.parse(localStorage.getItem('notesList')) ||[{
  note: 'ex',
  date: '12-22-2026'
}];

renderNotes();

function renderNotes(){  
  let addedHTML = '';
  let id = 0;

  for(let i = 0; i < notesList.length; i++){
    const notesObject = notesList[i];
    const note = notesObject.note;
    const date = notesObject.date;
    const html = `
    <div>Note Date</div>
    <div>${note} ${date}</div>
    
    `;
    addedHTML += html;
  }
  document.querySelector('.notes-container').innerHTML = addedHTML;
}


function addNote(){
  const noteElement = document.querySelector('.input-val');
  const dateElement = document.querySelector('.date-val');
  const note = noteElement.value;
  const date = dateElement.value;

  if(note === '' || date === ''){
    return;
  }

  notesList.push({
    note: note,
    date: date
  });

  noteElement.value = '';
  renderNotes();

  saveToStorage();

  console.log(notesList);
}

function saveToStorage(){
  localStorage.setItem('notesList', JSON.stringify(notesList));
}

