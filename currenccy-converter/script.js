const api="https://v6.exchangerate-api.com/v6/f649be8c1b02f96690c6fdd1/latest/USD";
const to=document.querySelector("#to-curr");
const from=document.querySelector("#from-curr");
const userInput=document.querySelector("#value");
let rate;

async function apicall(){
    const resp=await fetch(api);
    const data=await resp.json();
    rate=data.conversion_rates;
    fromDropMenu(rate);
    toDropMenu(rate);
    
}

apicall();
document.querySelector('button').addEventListener("click",function(){
    if(userInput.value === ""){
        alert("Please enter a value");
    }else{
        convert(rate);
    }
 
});

function fromDropMenu(currency){
    const keys = Object.keys(currency);
keys.forEach(data => {
    const option=document.createElement("option");
    option.value=data;
    option.textContent=data;
    from.add(option);
});
from.value="USD";
}

function toDropMenu(currency){
    const keys = Object.keys(currency);
keys.forEach(data => {
    const option=document.createElement("option");
    option.value=data;
    option.textContent=data;
    to.add(option);
});
to.value="INR";
}

function convert(rates){
    const value=userInput.value;
    const fromCurr=rates[from.value];
    console.log(rates);
    const toCurr=rates[to.value];
    let converted=(Number(value)/fromCurr)*toCurr;
    document.querySelector(".ans").innerHTML=converted;
}
