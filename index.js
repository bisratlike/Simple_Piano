const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']
let notes=document.querySelectorAll(".key");
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

notes.forEach( note=> {
note.addEventListener("click",()=>{
    music(note);
});

document.addEventListener('keydown', e => {
    if (e.repeat) return
    const key = e.key
    const whiteKeyIndex = WHITE_KEYS.indexOf(key)
    const blackKeyIndex = BLACK_KEYS.indexOf(key)
  
    if (whiteKeyIndex > -1) music(whiteKeys[whiteKeyIndex])
    if (blackKeyIndex > -1) music(blackKeys[blackKeyIndex])
  })



});
function music(note){
    id=note.className.split(' ')[2];
    audios= document.getElementById(id);
    audios.currentTime = 0
    audios.play();
    note.classList.add('active')
    audios.addEventListener('ended', () => {
    note.classList.remove('active')
  })

}