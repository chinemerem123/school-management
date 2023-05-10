//User account page adding new category input box
//===============================================

let btnAddcate=document.getElementById("add-cate");
let cateBox=document.getElementById("add-cate-box");
let cateAdd=document.getElementById("cate-add");
let cateNewItem=document.getElementById("new-item");

let selectCate = document.getElementById("select-cate");
var option = document.createElement("option");
option.text = "Kiwi";
x.add(option);

btnAddcate.addEventListener("click",()=>{
    cateBox.style.display="block";
})

if( cateBox.style.display="block"){
cateAdd.addEventListener("click",()=>{
   
    cateBox.style.display="none";
})
}