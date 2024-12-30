let btn = document.querySelector("button");
let ulist = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;
    ulist.appendChild(item);

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);

    console.log(inp.value);
    inp.value = ""; 

});

ulist.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
})

// let delBtns = document.querySelectorAll(".delete");

// for(delBtn of delBtns) {
//     delBtn.addEventListener("click", function(){
//         let par = delBtn.parentElement;
//         par.remove();
//     })
// }