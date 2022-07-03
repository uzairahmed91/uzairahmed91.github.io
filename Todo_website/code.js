const form=document.forms["myform"]
const input=form["task"]
const ul=document.getElementById("tasklist")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
const val=input.value
const new_li=document.createElement("li")
new_li.innerHTML=val+ "<i onclick=\"deletetask(this)\" class=\"fa-solid fa-xmark\" style=\"float:right ;\" ></i>" //backslash before commas will tell JS to treat this as a string, not as a JS code
ul.appendChild(new_li)
})

function deletetask(x){
    x.parentElement.remove()
}