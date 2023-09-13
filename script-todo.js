var btn_aktifitas1 = document.getElementById("btn_aktifitas1");
var btn_aktifitas2 = document.getElementById("btn_aktifitas2");
var btn_aktifitas3 = document.getElementById("btn_aktifitas3");
var btn_aktifitas4 = document.getElementById("btn_aktifitas4");
var btn_aktifitas5 = document.getElementById("btn_aktifitas5");
var konten_1 = document.getElementById("konten-1");
var konten_2 = document.getElementById("konten-2");
var konten_3 = document.getElementById("konten-3");
var konten_4 = document.getElementById("konten-4");
var konten_5 = document.getElementById("konten-5");

function myFunction(){
    if(konten_1.style.display=="none"){
        konten_1.style.display="block";
    }
    else{
        konten_1.style.display="none";
    }
}
function myFunction2(){
    if(konten_2.style.display=="none"){
        konten_2.style.display="block";
    }
    else{
        konten_2.style.display="none";
    }
}
function myFunction3(){
    if(konten_3.style.display=="none"){
        konten_3.style.display="block";
    }
    else{
        konten_3.style.display="none";
    }
}
function myFunction4(){
    if(konten_4.style.display=="none"){
        konten_4.style.display="block";
    }
    else{
        konten_4.style.display="none";
    }
}
function myFunction5(){
    if(konten_5.style.display=="none"){
        konten_5.style.display="block";
    }
    else{
        konten_5.style.display="none";
    }
}
function myFunction6(){
    if(konten_6.style.display=="none"){
        konten_6.style.display="block";
    }
    else{
        konten_6.style.display="none";
    }
}

var saringmenu_1 = document.querySelector("#saringmenu_1");
var saringmenu_2 = document.getElementById("saringmenu_2");

const filterOn = [];
const filterOff = [];

function saringMenu(paramSaringMenu){
    var test = document.getElementById(paramSaringMenu);
    console.log(test.style);
    
    var dateSpan = document.createElement('span')
    dateSpan.innerHTML = "Bawahnya contoh 1";
    console.log(dateSpan);
    saringmenu_1.parentNode.appendChild(dateSpan);
}




// tugu jogja weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
var divA = document.getElementById("divA");
var divB = document.getElementById("divB");
var act1 = document.getElementById("act1");
var act2 = document.getElementById("act2");
var act3 = document.getElementById("act3");
var act4 = document.getElementById("act4");
var act5 = document.getElementById("act5");

act1.addEventListener("click", ()=>{
    divA.style.display="block";
    divB.style.display="none";
});

act2.addEventListener("click", ()=>{
    divA.style.display="none";
    divB.style.display="block";
});

act3.addEventListener("click", ()=>{
    divA.style.display="block";
    divB.style.display="none";
});

act4.addEventListener("click", ()=>{
    divA.style.display="block";
    divB.style.display="none";
});

act5.addEventListener("click", ()=>{
    divA.style.display="block";
    divB.style.display="none";
});

var btn_simpandaftar1 = document.getElementById("btn_simpandaftar1");
var kosong_1 = document.getElementById("kosong_1");
function pindahsimpandaftar1() {
    var simpan_1 = document.getElementById("simpan_1");
    var kosong_1 = document.getElementById("kosong_1");
    if(simpan_1.style.display=="none"){
        simpan_1.style.display="block";
        kosong_1.style.display="none";
    }
    else{
        simpan_1.style.display="none";
        kosong_1.style.display="block";

    }
}
function pindahsimpandaftar2() {
    var simpan_2 = document.getElementById("simpan_2");
    if(simpan_2.style.display=="none"){
        simpan_2.style.display="block";
    }
    else{
        simpan_2.style.display="none";

    }
}
function pindahsimpandaftar3() {
    var simpan_3 = document.getElementById("simpan_3");
    if(simpan_3.style.display=="none"){
        simpan_3.style.display="block";
    }
    else{
        simpan_3.style.display="none";
        kosong_1.style.display="block";

    }
}