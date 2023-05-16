//===============================================
//User account page adding new category input box
//===============================================

let btnAddcate=document.getElementById("add-cate");
let cateBox=document.getElementById("add-cate-box");
let cateAdd=document.getElementById("cate-add");
let cateNewItem=document.getElementById("new-item");
let selectCate = document.getElementById("select-cate");

window.addEventListener("load", ()=>{
    cateBox.style.display="none";
})


btnAddcate.addEventListener("click",()=>{
    cateBox.style.display="block";
})


if( cateBox.style.display="block"){
cateAdd.addEventListener("click",()=>{

    let crateOption = document.createElement("option");
    crateOption.text = cateNewItem.value;
    selectCate.add(crateOption);
    cateBox.style.display="none";
    cateNewItem.value="";

})
}

//=========================================================
//User account page adding new category input box ends here
//=========================================================


function toggle(source) {
    checkboxes = document.getElementsByName('foo');
    for(var i=0, n=checkboxes.length;i<n;i++) {
      checkboxes[i].checked = source.checked;
    }
  }


 