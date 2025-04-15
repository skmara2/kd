let summa=0;
let stundas=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let punkti=0;
let temas=0;
let ii;
let ri;
let g=0;
let f;
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
    if (temas>10){
      f="tema5.html"
    }
    else{
      f="tema3.html"
    }
  
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
  document.getElementById("in1").value="";
  document.getElementById("in2").value="";
  if(g==0){
    for (let i = 1; i <= temas; i++) {
      ii="t"+i
      let s=document.getElementById(ii).value;
        if (s.length>0){
          summa+=Number(s);
          stundas[i]=Number(s)
        }
        else{
          summa=0;
          stundas=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
          punkti=0;
          temas=0;
          alert("Nav visi dati!\nSāc no jauna ar tēmu un punktu skaitu!");
        }
    }
    
  }
  else{ 
    summa=0;
    stundas=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    punkti=0;
    temas=0;
    alert("Punkti jau ir aprēķināti!\nSāc atkal ar tēmu un punktu skaitu!");
  }
  g+=1;
  if(summa>0){
    kopa1();
  }
}
  
function kopa1(){  
  let v=punkti/summa
  for (let i = 1; i <= temas; i++) {
    let r=Math.round(stundas[i]*v);
    ri="rez"+i
    document.getElementById(ri).value=r;
    }
  summa=0;
  stundas=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  punkti=0;
  temas=0;
}
  

  
 
