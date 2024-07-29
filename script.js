const input=document.querySelector("input");
const total=document.querySelectorAll("p span")[0];
const remain=document.querySelectorAll("p span")[1];
const totalCharacter=50;
input.addEventListener("input",function(){
    const length=input.value.length;
    total.textContent=length;
    remain.textContent=totalCharacter-length;
    if(length>=totalCharacter){
    input.value=input.value.substring(0,maxCharacters);
    remain.textContent=0;
    total.textContent=50;
}
});











