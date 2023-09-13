var btn_aktifitas1 = document.getElementById("btn_aktifitas1");
var btn_aktifitas2 = document.getElementById("btn_aktifitas2");
var btn_aktifitas3 = document.getElementById("btn_aktifitas3");
var btn_aktifitas4 = document.getElementById("btn_aktifitas4");
var btn_aktifitas5 = document.getElementById("btn_aktifitas5");
var btn_aktifitas6 = document.getElementById("btn_aktifitas6");
var konten_1 = document.getElementById("konten-1");
var konten_2 = document.getElementById("konten-2");
var konten_3 = document.getElementById("konten-3");
var konten_4 = document.getElementById("konten-4");
var konten_5 = document.getElementById("konten-5");
var konten_6 = document.getElementById("konten-6");


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
var btn_simpandaftar2 = document.getElementById("btn_simpandaftar2");
var btn_simpandaftar3 = document.getElementById("btn_simpandaftar3");
var btn_simpandaftar4 = document.getElementById("btn_simpandaftar4");
var btn_simpandaftar5 = document.getElementById("btn_simpandaftar5");
var btn_simpandaftar6 = document.getElementById("btn_simpandaftar6");
function kosong(){
    if(simpan_1.style.display=="none"&&simpan_2.style.display=="none"&&simpan_3.style.display=="none"&&simpan_4.style.display=="none"&&simpan_5.style.display=="none"&&simpan_6.style.display=="none"){
        var kosong_1 = document.getElementById("kosong_1");
        kosong_1.style.display="flex";
        
    }
}
function pindahsimpandaftar1() {
    if(simpan_1.style.display=="none"){
        simpan_1.style.display="block";
        kosong_1.style.display="none";
    }
    else{
        simpan_1.style.display="none";
        kosong();
    }
}
function pindahsimpandaftar2() {
    var simpan_2 = document.getElementById("simpan_2");
    if(simpan_2.style.display=="none"){
        simpan_2.style.display="block";
        kosong_1.style.display="none";
    }
    else{
        simpan_2.style.display="none";
        kosong();

    }
}
function pindahsimpandaftar3() {
    var simpan_3 = document.getElementById("simpan_3");
    if(simpan_3.style.display=="none"){
        simpan_3.style.display="block";
        kosong_1.style.display="none";
    }
    else{
        simpan_3.style.display="none";
        kosong();

    }
}
function pindahsimpandaftar4() {
    var simpan_4 = document.getElementById("simpan_4");
    if(simpan_4.style.display=="none"){
        simpan_4.style.display="block";
        kosong_1.style.display="none";
    }
    else{
        simpan_4.style.display="none";
        kosong();

    }
}
function pindahsimpandaftar5() {
    var simpan_5 = document.getElementById("simpan_5");
    if(simpan_5.style.display=="none"){
        simpan_5.style.display="block";
        kosong_1.style.display="none";
    }
    else{
        simpan_5.style.display="none";
        kosong();

    }
}
function pindahsimpandaftar6() {
    var simpan_6 = document.getElementById("simpan_6");
    if(simpan_6.style.display=="none"){
        simpan_6.style.display="block";
        kosong_1.style.display="none";
    }
    else{
        simpan_6.style.display="none";
        kosong();

    }
}

var btn_hotelmin = document.getElementById("hotel-min");
var btn_motelmin = document.getElementById("motel-min");
var btn_motelplus = document.getElementById("motel-plus");

function hotelmin() {
    var btn_hotelmin = document.getElementById("hotel-min");
    var btn_hotelplus = document.getElementById("hotel-plus");
    if(btn_hotelplus.style.display=="none"){
        btn_hotelplus.style.display="block";
        btn_hotelmin.style.display="none";
    }
    else {
        btn_hotelplus.style.display="none";
        btn_hotelmin.style.display="block";
    }
}
function motelmin() {
    var btn_motelmin = document.getElementById("motel-min");
    var btn_motelplus = document.getElementById("motel-plus");
    if(btn_motelplus.style.display=="none"){
        btn_motelplus.style.display="block";
        btn_motelmin.style.display="none";
    }
    else {
        btn_motelplus.style.display="none";
        btn_motelmin.style.display="block";
    }
}

function moneychangermin() {
    var btn_moneychangermin = document.getElementById("moneychanger-min");
    var btn_moneychangerplus = document.getElementById("moneychanger-plus");
    if(btn_moneychangerplus.style.display=="none"){
        btn_moneychangerplus.style.display="block";
        btn_moneychangermin.style.display="none";
    }
    else {
        btn_moneychangerplus.style.display="none";
        btn_moneychangermin.style.display="block";
    }
}
function mallmin() {
    var btn_mallmin = document.getElementById("mall-min");
    var btn_mallplus = document.getElementById("mall-plus");
    if(btn_mallplus.style.display=="none"){
        btn_mallplus.style.display="block";
        btn_mallmin.style.display="none";
    }
    else {
        btn_mallplus.style.display="none";
        btn_mallmin.style.display="block";
    }
}
function ticketmin() {
    var btn_ticketmin = document.getElementById("ticket-min");
    var btn_ticketplus = document.getElementById("ticket-plus");
    if(btn_ticketplus.style.display=="none"){
        btn_ticketplus.style.display="block";
        btn_ticketmin.style.display="none";
    }
    else {
        btn_ticketplus.style.display="none";
        btn_ticketmin.style.display="block";
    }
}

function kemahmin() {
    var btn_kemahmin = document.getElementById("kemah-min");
    var btn_kemahplus = document.getElementById("kemah-plus");
    if(btn_kemahplus.style.display=="none"){
        btn_kemahplus.style.display="block";
        btn_kemahmin.style.display="none";
    }
    else {
        btn_kemahplus.style.display="none";
        btn_kemahmin.style.display="block";
    }
}

function pantaimin() {
    var btn_pantaimin = document.getElementById("pantai-min");
    var btn_pantaiplus = document.getElementById("pantai-plus");
    if(btn_pantaiplus.style.display=="none"){
        btn_pantaiplus.style.display="block";
        btn_pantaimin.style.display="none";
    }
    else {
        btn_pantaiplus.style.display="none";
        btn_pantaimin.style.display="block";
    }
}

function jalansantaimin() {
    var btn_jalansantaimin = document.getElementById("jalansantai-min");
    var btn_jalansantaiplus = document.getElementById("jalansantai-plus");
    if(btn_jalansantaiplus.style.display=="none"){
        btn_jalansantaiplus.style.display="block";
        btn_jalansantaimin.style.display="none";
    }
    else {
        btn_jalansantaiplus.style.display="none";
        btn_jalansantaimin.style.display="block";
    }
}

function forestmin() {
    var btn_forestmin = document.getElementById("forest-min");
    var btn_forestplus = document.getElementById("forest-plus");
    if(btn_forestplus.style.display=="none"){
        btn_forestplus.style.display="block";
        btn_forestmin.style.display="none";
    }
    else {
        btn_forestplus.style.display="none";
        btn_forestmin.style.display="block";
    }
}

function trendmin() {
    var btn_trendmin = document.getElementById("trend-min");
    var btn_trendplus = document.getElementById("trend-plus");
    if(btn_trendplus.style.display=="none"){
        btn_trendplus.style.display="block";
        btn_trendmin.style.display="none";
    }
    else {
        btn_trendplus.style.display="none";
        btn_trendmin.style.display="block";
    }
}