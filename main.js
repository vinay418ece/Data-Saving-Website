
let notes = []
// document.addEventListener('DOMContentLoaded',function(){

document.querySelector('.sidebar').addEventListener('click',function(){
  // document.getElementById('open').addEventListener('click', function() {
    document.getElementById('open').style.display = 'flex';
  });
  // // const noteList = document.querySelector('.sidebar');
  // // noteList.classList.toggle('hidden');
  // // document.querySelector('.sidebar').style.display = sidebar
  console.log('clickable')
  // let sidebarList = document.querySelector('.sidebar');
  // document.querySelector('.editbutton').onclick = function(){
    // document.getElementById('task').classList.remove('d-none');
    // document.getElementById('form').style.display = 'none';
  

// });

function renderElementsToScreen(){
   if(localStorage.getItem('sidebar')){
    notes = JSON.parse(localStorage.getItem('sidebar'));
    notes.forEach(note=>{
      renderNoteToList(note)
    });
   }
}
let notesListElement = document.querySelector('.sidebar');
document.querySelector('.editbutton').onclick = function(){
  document.getElementById('image').style.display = 'none';
  document.getElementById('form').style.display = 'block';
  // document.getElementById('task').style.display = 'none';

}

document.querySelector('.create').onclick = function(){

  let note = {
    title : document.querySelector('.textarea').value,
    content : document.querySelector('.textcontent').value
  }
  addNoteToLocalStorage(note)
  renderNoteToList(note);
}

function renderNoteToList(note){
  let noteDiv = document.createElement('div');
  noteDiv.className = 'note';
  let noteTitle = document.createElement('h4')
  let noteContent = document.createElement('p')
 
  noteDiv.appendChild(noteTitle)
  noteDiv.appendChild(noteContent)

  notesListElement.appendChild(noteDiv)

  document.querySelector('.textarea').value = '';
  document.querySelector('.textcontent').value ='';

  noteTitle.innerText = note.title;
  noteContent.innerText = note.content;
}
function addNoteToLocalStorage(note){
  notes.push(note);

  localStorage.setItem('sidebar',JSON.stringify(notes))


}
renderElementsToScreen();


// document.getElementById('open').addEventListener('click', function() {
//   document.getElementById('popup').style.display = 'flex';
// });


// document.querySelector('.sidebar').onclick = function(){
//   // // const noteList = document.querySelector('.sidebar');
//   // // noteList.classList.toggle('hidden');
//   // // document.querySelector('.sidebar').style.display = sidebar
//   console.log('clickable')
//   // let sidebarList = document.querySelector('.sidebar');
//   // document.querySelector('.editbutton').onclick = function(){
//   document.getElementById('form').style.display = 'none';
//   document.getElementById('task').style.display = 'block; !important';

// }



