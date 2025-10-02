/* --- lo de antes se queda igual --- */

const toggleJoeBtn = document.getElementById('toggleJoe');
const joeBox = document.getElementById('joeBox');

let isJoeOpen = false;
toggleJoeBtn.addEventListener('click', ()=>{
  isJoeOpen = !isJoeOpen;
  if(isJoeOpen){
    joeBox.classList.remove('hidden');
    joeBox.scrollIntoView({behavior:'smooth', block:'center'});
  } else {
    joeBox.classList.add('hidden');
  }
});
