let notesList = [{
  note: 'ex',
  date: '12-22-2026'
}];

function addToArray(){
  const noteElement = document.querySelector('.input-val');
  const dateElement = document.querySelector('.date-val');
  const note = noteElement.value;
  const date = dateElement.value;

  notesList.push({
    text: note,
    date: date
  });

  console.log(notesList);
}