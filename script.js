let summa=0;
let stundas=[0,0,0,0,0,0,0,0,0,0,0];
let punkti=0;
let temas=0;
let ii;
let ri;
let g=0;
function viens(){
  g=0;
  temas=document.getElementById("in1").value;
  if(temas.length>0){
  document.getElementById("grupa1").style.display="none";
  }
  else{
    alert("Ievadi tēmu skaitu!");
  }
}
function divi(){
  g=0;
  let p=document.getElementById("in2").value;
  if(p.length>0){
  punkti=Number(p)
  document.getElementById("grupa2").style.display="none";
  let f="tema3.html"
  fetch(f)
  .then(atbilde => atbilde.text())
  .then(html => {
    document.getElementById('ietvars').innerHTML = html;
  })
  .catch(kļūda => {
    console.error('Kļūda ielādējot dokumentu:', kļūda);
  });
  }
  else{
    alert("Ievadi punktu skaitu!");
  }
}


function kopa(){
  
  if(g==0){
  for (let i = 1; i <= temas; i++) {
    ii="t"+i
    let s=document.getElementById(ii).value;
    if (s.length>0){
    console.log(ii)
    summa+=Number(s);
    stundas[i]=Number(s)
    console.log(stundas)
    console.log(summa)
    }
    else{
      alert("Nav visi dati!");
    }
  }
  let v=punkti/summa
  console.log(v)
  for (let i = 1; i <= temas; i++) {
    let r=Math.round(stundas[i]*v);
    console.log(r)
    ri="rez"+i
    document.getElementById(ri).value=r;
  }
  }
  else{
    alert("Punkti jau ir aprēķināti!");
  }
  g+=1;
  }
  
 
