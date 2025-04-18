

const inputbox = document.getElementById("display");
const number = document .querySelectorAll(".btn")
const clear = document.getElementsByClassName("clr-btn");
const equal = document.getElementsByClassName("equal-btn");
const back = document.getElementsByClassName("back-btn");


number.value;
for (let i = 0; i < number.length; i++){
    number[i].addEventListener("click", function(){
     inputbox.value+= number[i].textContent;
    })
}
clear[0].addEventListener("click", function(){
    console.log(inputbox.value);
    inputbox.value = "";
});
equal[0].addEventListener("click", function(){
    inputbox.value = eval(inputbox.value);
})
back[0].addEventListener("click", function(){
    inputbox.value = inputbox.value.slice(0,-1);
})
