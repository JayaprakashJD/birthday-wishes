// Change this to your chosen 4-digit passcode.
const PASSCODE='1212';let entered='';const dots=document.querySelectorAll('#dots i');const hint=document.getElementById('hint');
function paint(){dots.forEach((d,i)=>d.classList.toggle('on',i<entered.length))}
document.querySelectorAll('[data-key]').forEach(b=>b.addEventListener('click',()=>{let k=b.dataset.key;if(k==='clear'){entered='';paint();hint.textContent='Something special is waiting for you';return}if(entered.length===4)return;entered+=k;paint();if(entered.length===4){if(entered===PASSCODE){hint.textContent='Unlocked! ♡';setTimeout(()=>location.href='celebration.html',450)}else{hint.textContent='Wrong passcode — try again ♡';setTimeout(()=>{entered='';paint();hint.textContent='Something special is waiting for you'},900)}}}));
