let addMoreSub=document.getElementById("add-more");
let addSubBox=document.getElementById("add-subject-box");

addMoreSub.addEventListener('click',()=>{
   addSubBox.style.display="flex";
})

document.getElementById('addSub').addEventListener('click',()=>{
    addSubBox.style.display="none";
})

let remark=document.getElementById("remark");
let remarkOpt=document.getElementById("remark-opt")

remark.onclick = function(){
    alert("hello");
};

let addBehave=document.getElementById("add-behave");
let behaveAdd=document.getElementById("behave-add");
let addBehaveBox=document.getElementById("add-behave-box");

addBehave.addEventListener("click",()=>{
addBehaveBox.style.display="block";
})

behaveAdd.addEventListener("click",()=>{
    addBehaveBox.style.display="none";
    })





let assign=document.getElementById("assign");
let change=document.getElementById("change");
let del=document.getElementById("del");
let oneForAll=document.getElementById('one-for-all');
let dele=document.getElementById("dele");
let sms=document.getElementById("sms");

assign.addEventListener('click',()=>{
    document.getElementById('assign-change').style.display="block";
    document.getElementById('one-for-all').style.display="none";
    
})

document.getElementById("close").addEventListener('click',()=>{
    document.getElementById('assign-change').style.display="none";
    oneForAll.style.display="block";
})



change.addEventListener('click',()=>{
    document.getElementById('change-box').style.display="block";
    oneForAll.style.display="none";
    
})

document.getElementById("close3").addEventListener('click',()=>{
    document.getElementById('change-box').style.display="none";
    oneForAll.style.display="block";
})



document.getElementById("close2").addEventListener('click',()=>{
    oneForAll.style.display="flex";
    dele.style.display="none";
})


del.addEventListener('click',()=>{
    dele.style.display="block";
    oneForAll.style.display="none";
})


sms.addEventListener('click',()=>{
    document.getElementById('sms-send').style.display="block";
    oneForAll.style.display="none";
    
})

document.getElementById("close4").addEventListener('click',()=>{
    oneForAll.style.display="flex";
    document.getElementById('sms-send').style.display="none";
})


assign.addEventListener("click",()=>{
   change.style.display="block";
})



document.getElementById("user-modify").addEventListener("click",()=>{
    document.getElementById('info').classList.toggle('show');
})



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
  };
 
 //=========================================================
//=========================================================

