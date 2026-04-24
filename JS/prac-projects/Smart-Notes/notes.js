let notesList = [{
  note: 'ex',
  date: '12-22-2026'
}];

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

  console.log(notesList);
}

